import { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  BadgeCheck,
  Ban,
  ChefHat,
  ChevronRight,
  CircleAlert,
  CircleDashed,
  Info,
  Lightbulb,
  MapPin,
  Phone,
  RotateCcw,
  Send,
  Sparkles,
  Timer,
  X,
} from 'lucide-react';
import { canSubmitRequest, type OrderRequest, type RequestStatus } from './types';
import { EXAMPLE_REQUESTS, DECLINE_REASONS, formatRupiah } from './data';
import { usePrototypeState } from './usePrototypeState';
import { OrderStatusBanner, RestaurantHeader, OrderSummaryCard, Section } from './components/ui';
import { RequestCard, EmptyHistory } from './components/RequestCard';

type Screen = 'overview' | 'details' | 'form' | 'confirm' | 'success' | 'unavailable';

const STATUS_OPTIONS: { status: RequestStatus; label: string; icon: React.ReactNode }[] = [
  { status: 'awaiting', label: 'Awaiting', icon: <CircleDashed className="h-3.5 w-3.5" /> },
  { status: 'accepted', label: 'Accept', icon: <BadgeCheck className="h-3.5 w-3.5" /> },
  { status: 'unable', label: "Can't fulfill", icon: <CircleAlert className="h-3.5 w-3.5" /> },
];

export default function App() {
  const { order, requests, addRequest, setRequestStatus, advanceStage, resetDemo } = usePrototypeState();
  const [screen, setScreen] = useState<Screen>('overview');
  const [draft, setDraft] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [simulateUnavailable, setSimulateUnavailable] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const eligible = canSubmitRequest(order) && !simulateUnavailable;

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [screen]);

  const go = (s: Screen) => setScreen(s);

  const backScreen: Screen | null =
    screen === 'details' || screen === 'unavailable'
      ? 'overview'
      : screen === 'form' || screen === 'confirm'
        ? screen === 'form'
          ? 'details'
          : 'form'
        : null;

  const openForm = () => {
    setDraft('');
    setValidationError(null);
    go('form');
  };

  const submitDraft = () => {
    if (!draft.trim()) {
      setValidationError('Please write your request before submitting.');
      return;
    }
    setValidationError(null);
    go('confirm');
  };

  const confirmSubmit = () => {
    addRequest(draft.trim());
    go('success');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-gray-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-md items-center gap-3 px-4 md:max-w-2xl lg:max-w-3xl">
          {backScreen && (
            <button
              onClick={() => go(backScreen)}
              className="flex h-9 w-9 items-center justify-center rounded-full transition hover:bg-gray-100"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-600 font-extrabold text-white text-sm">G</span>
            <span className="font-extrabold tracking-tight">
              GrabFood <span className="font-medium text-gray-400">Request Demo</span>
            </span>
          </div>
        </div>
      </header>

      <main ref={scrollRef} className="mx-auto max-w-md px-4 pb-24 pt-5 md:max-w-2xl lg:max-w-3xl">
        {screen === 'overview' && (
          <OverviewScreen order={order} requests={requests} eligible={eligible} onOpenDetails={() => go('details')} onAdvanceStage={advanceStage} />
        )}

        {screen === 'details' && (
          <DetailsScreen
            order={order}
            requests={requests}
            eligible={eligible}
            simulateUnavailable={simulateUnavailable}
            onToggleSimulate={() => setSimulateUnavailable((v) => !v)}
            onSubmitRequest={openForm}
            onSetStatus={(id, s) => setRequestStatus(id, s, DECLINE_REASONS[0])}
            onAdvanceStage={advanceStage}
            onReset={resetDemo}
          />
        )}

        {screen === 'form' && (
          <FormScreen
            draft={draft}
            setDraft={(v) => {
              setDraft(v);
              if (validationError) setValidationError(null);
            }}
            error={validationError}
            onSubmit={submitDraft}
          />
        )}

        {screen === 'confirm' && (
          <ConfirmScreen
            message={draft}
            orderId={order.id}
            onConfirm={confirmSubmit}
            onCancel={() => go('form')}
          />
        )}

        {screen === 'success' && (
          <SuccessScreen
            message={draft}
            onTrack={() => go('details')}
            onHome={() => go('overview')}
          />
        )}

        {screen === 'unavailable' && <UnavailableScreen order={order} onBack={() => go('overview')} />}

        {/* Demo mode: quick navigation to the time-limit screen */}
        {screen === 'details' && (
          <button
            onClick={() => go('unavailable')}
            className="mt-4 flex w-full items-center gap-2 rounded-xl border border-dashed border-gray-300 bg-white/60 px-4 py-3 text-left text-xs text-gray-500 transition hover:border-brand-300 hover:text-brand-700"
          >
            <Info className="h-4 w-4 shrink-0" />
            Demo: preview the “request window closed” screen
            <ChevronRight className="ml-auto h-4 w-4" />
          </button>
        )}
      </main>
    </div>
  );
}

/* ------------------------------ Screens ------------------------------ */

function OverviewScreen({
  order,
  requests,
  eligible,
  onOpenDetails,
  onAdvanceStage,
}: {
  order: ReturnType<typeof usePrototypeState>['order'];
  requests: OrderRequest[];
  eligible: boolean;
  onOpenDetails: () => void;
  onAdvanceStage: () => void;
}) {
  return (
    <div className="space-y-5 animate-fade-up">
      <div>
        <h1 className="text-xl font-extrabold tracking-tight">Good afternoon, Raka</h1>
        <p className="mt-0.5 text-sm text-gray-500">Track your active order below.</p>
      </div>

      <OrderStatusBanner order={order} />

      <button
        onClick={onOpenDetails}
        className="group w-full overflow-hidden rounded-3xl border border-gray-100 bg-white text-left shadow-card transition hover:shadow-lift"
      >
        <div className="h-28 bg-gradient-to-br from-brand-500 via-brand-600 to-brand-800 p-5">
          <div className="flex items-center justify-between">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur">
              Active order • {order.id}
            </span>
            <ChefHat className="h-6 w-6 text-white/80" />
          </div>
          <p className="mt-4 text-lg font-bold text-white">{order.restaurantName}</p>
          <p className="text-xs text-white/80">
            {order.items.reduce((n, i) => n + i.qty, 0)} items • {formatRupiah(order.subtotal + order.deliveryFee + order.tax)}
          </p>
        </div>
        <div className="flex items-center justify-between px-5 py-4">
          <div className="text-sm">
            <p className="font-semibold text-gray-900">View order details</p>
            <p className="text-xs text-gray-500">
              {eligible ? 'You can still submit a request for this order' : 'Requests are closed for this order'}
            </p>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-brand-600" />
        </div>
      </button>

      {requests.length > 0 && (
        <Section title="Your requests">
          <div className="space-y-3">
            {requests.slice(0, 2).map((r, i) => (
              <RequestCard key={r.id} request={r} isLatest={i === 0} />
            ))}
          </div>
        </Section>
      )}

      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-card">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-400">Demonstration controls</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={onAdvanceStage}
            className="rounded-full bg-gray-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-gray-700"
          >
            Advance order status
          </button>
        </div>
        <p className="mt-2 text-xs text-gray-400">
          Advancing the order moves it toward “picked up”, after which requests close — this demonstrates the time
          limit.
        </p>
      </div>
    </div>
  );
}

function DetailsScreen({
  order,
  requests,
  eligible,
  simulateUnavailable,
  onToggleSimulate,
  onSubmitRequest,
  onSetStatus,
  onAdvanceStage,
  onReset,
}: {
  order: ReturnType<typeof usePrototypeState>['order'];
  requests: OrderRequest[];
  eligible: boolean;
  simulateUnavailable: boolean;
  onToggleSimulate: () => void;
  onSubmitRequest: () => void;
  onSetStatus: (id: string, s: RequestStatus) => void;
  onAdvanceStage: () => void;
  onReset: () => void;
}) {
  return (
    <div className="space-y-5 animate-fade-up">
      <OrderStatusBanner order={order} />
      <RestaurantHeader order={order} />

      {eligible ? (
        <button
          onClick={onSubmitRequest}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-4 text-sm font-bold text-white shadow-card transition hover:bg-brand-700 active:scale-[.99]"
        >
          <Send className="h-4 w-4" />
          Submit a Request
        </button>
      ) : (
        <div className="flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 px-4 py-3">
          <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-red-500" />
          <div>
            <p className="text-sm font-bold text-red-700">Request submission is closed</p>
            <p className="mt-0.5 text-xs text-red-600">
              The driver has picked up your order or the restaurant has started final preparation, so new requests
              can no longer be accepted.
            </p>
          </div>
        </div>
      )}

      <p className="flex items-center gap-2 rounded-xl bg-amber-50 border border-amber-100 px-4 py-3 text-xs text-amber-800">
        <Timer className="h-4 w-4 shrink-0" />
        Requests can be submitted until the driver picks up your order. Submitting doesn't guarantee the restaurant
        can fulfill it.
      </p>

      <OrderSummaryCard order={order} />

      <Section title="Request history">
        {requests.length === 0 ? (
          <EmptyHistory />
        ) : (
          <div className="space-y-3">
            {requests.map((r, i) => (
              <RequestCard
                key={r.id}
                request={r}
                isLatest={i === 0}
                demoControls={
                  <DemoStatusControls
                    current={r.status}
                    onSet={(s) => onSetStatus(r.id, s)}
                  />
                }
              />
            ))}
          </div>
        )}
      </Section>

      {/* Demo controls */}
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-card">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-400">Demonstration controls</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={onAdvanceStage}
            className="rounded-full bg-gray-900 px-4 py-2 text-xs font-bold text-white transition hover:bg-gray-700"
          >
            Advance order status
          </button>
          <button
            onClick={onToggleSimulate}
            className={`rounded-full px-4 py-2 text-xs font-bold transition ${
              simulateUnavailable ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {simulateUnavailable ? 'Reopen request window' : 'Close request window'}
          </button>
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-4 py-2 text-xs font-bold text-gray-700 transition hover:bg-gray-200"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Reset demo
          </button>
        </div>
      </div>
    </div>
  );
}

function DemoStatusControls({ current, onSet }: { current: RequestStatus; onSet: (s: RequestStatus) => void }) {
  return (
    <div>
      <p className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-400">Demo: set restaurant response</p>
      <div className="flex flex-wrap gap-2">
        {STATUS_OPTIONS.map((o) => (
          <button
            key={o.status}
            onClick={() => onSet(o.status)}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition ${
              current === o.status
                ? 'border-brand-600 bg-brand-600 text-white'
                : 'border-gray-200 bg-white text-gray-600 hover:border-brand-400 hover:text-brand-700'
            }`}
          >
            {o.icon}
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function FormScreen({
  draft,
  setDraft,
  error,
  onSubmit,
}: {
  draft: string;
  setDraft: (v: string) => void;
  error: string | null;
  onSubmit: () => void;
}) {
  return (
    <div className="space-y-5 animate-fade-up">
      <div>
        <h1 className="text-xl font-extrabold tracking-tight">What would you like to ask?</h1>
        <p className="mt-1 text-sm text-gray-500">
          Write your instruction for the restaurant. You'll review it before anything is sent.
        </p>
      </div>

      <div>
        <label htmlFor="request-input" className="mb-1.5 block text-sm font-bold text-gray-900">
          Your request <span className="text-red-500">*</span>
        </label>
        <textarea
          id="request-input"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={4}
          maxLength={300}
          placeholder="e.g. Less ice for my iced coffee, please."
          aria-invalid={!!error}
          aria-describedby={error ? 'request-error' : undefined}
          className={`w-full resize-none rounded-2xl border px-4 py-3 text-sm outline-none transition focus:ring-2 ${
            error
              ? 'border-red-300 bg-red-50 focus:border-red-400 focus:ring-red-100'
              : 'border-gray-200 bg-white focus:border-brand-500 focus:ring-brand-100'
          }`}
        />
        <div className="mt-1 flex items-center justify-between">
          {error ? (
            <p id="request-error" className="flex items-center gap-1 text-xs font-semibold text-red-600">
              <AlertCircle className="h-3.5 w-3.5" />
              {error}
            </p>
          ) : (
            <span />
          )}
          <span className="text-xs text-gray-400">{draft.length}/300</span>
        </div>
      </div>

      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-4">
        <p className="flex items-center gap-1.5 text-xs font-bold text-brand-800">
          <Lightbulb className="h-4 w-4" />
          Need an idea?
        </p>
        <div className="mt-2 flex flex-wrap gap-2">
          {EXAMPLE_REQUESTS.map((ex) => (
            <button
              key={ex}
              onClick={() => setDraft(ex)}
              className="rounded-full border border-brand-200 bg-white px-3 py-1.5 text-xs font-medium text-brand-700 transition hover:bg-brand-100"
            >
              {ex}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-brand-700/70">Tap an example to use it — you can edit it freely.</p>
      </div>

      <button
        onClick={onSubmit}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-4 text-sm font-bold text-white shadow-card transition hover:bg-brand-700 active:scale-[.99]"
      >
        Continue to review
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

function ConfirmScreen({
  message,
  orderId,
  onConfirm,
  onCancel,
}: {
  message: string;
  orderId: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="space-y-5 animate-fade-up">
      <div>
        <h1 className="text-xl font-extrabold tracking-tight">Review your request</h1>
        <p className="mt-1 text-sm text-gray-500">Please check that everything reads correctly before sending.</p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-card">
        <p className="text-xs font-bold uppercase tracking-wide text-gray-400">Request for order {orderId}</p>
        <p className="mt-3 rounded-xl bg-gray-50 p-4 text-sm leading-relaxed text-gray-800">“{message}”</p>
        <p className="mt-3 flex items-start gap-2 text-xs text-gray-500">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          The restaurant will see this request and respond while your order is being prepared. Fulfillment depends on
          their capability.
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          onClick={onConfirm}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-600 px-5 py-4 text-sm font-bold text-white shadow-card transition hover:bg-brand-700 active:scale-[.99]"
        >
          <Send className="h-4 w-4" />
          Submit
        </button>
        <button
          onClick={onCancel}
          className="flex items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
        >
          <X className="h-4 w-4" />
          Cancel
        </button>
      </div>
    </div>
  );
}

function SuccessScreen({ message, onTrack, onHome }: { message: string; onTrack: () => void; onHome: () => void }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-5 text-center animate-pop-in">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100">
        <BadgeCheck className="h-10 w-10 text-brand-600" />
      </span>
      <div>
        <h1 className="text-xl font-extrabold tracking-tight">Request submitted</h1>
        <p className="mx-auto mt-1 max-w-sm text-sm text-gray-500">
          Your request has been sent to the restaurant. You'll see its status on the order details page.
        </p>
      </div>
      <p className="w-full rounded-2xl border border-gray-100 bg-white p-4 text-sm text-gray-800 shadow-card">“{message}”</p>
      <p className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-xs font-bold text-amber-700">
        <CircleDashed className="h-3.5 w-3.5" />
        Status: Awaiting Response
      </p>
      <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
        <button
          onClick={onTrack}
          className="rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-card transition hover:bg-brand-700"
        >
          Track request status
        </button>
        <button
          onClick={onHome}
          className="rounded-2xl border border-gray-200 bg-white px-6 py-3.5 text-sm font-bold text-gray-700 transition hover:bg-gray-50"
        >
          Back to my orders
        </button>
      </div>
    </div>
  );
}

function UnavailableScreen({ order, onBack }: { order: ReturnType<typeof usePrototypeState>['order']; onBack: () => void }) {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center space-y-5 text-center animate-pop-in">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50 border border-red-100">
        <Ban className="h-10 w-10 text-red-500" />
      </span>
      <div>
        <h1 className="text-xl font-extrabold tracking-tight">Requests are no longer available</h1>
        <p className="mx-auto mt-1 max-w-sm text-sm text-gray-500">
          Your order has reached the stage where the restaurant has finished preparing it, so new requests can't be
          submitted for order {order.id}.
        </p>
      </div>
      <div className="w-full rounded-2xl border border-gray-100 bg-white p-5 text-left shadow-card">
        <p className="flex items-center gap-1.5 text-sm font-bold text-gray-900">
          <Sparkles className="h-4 w-4 text-amber-500" />
          What you can still do
        </p>
        <ul className="mt-2 space-y-2 text-sm text-gray-600">
          <li className="flex items-start gap-2">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
            Contact the restaurant or driver directly for urgent instructions.
          </li>
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
            Reach out to Grab Customer Support from the order receipt if something is wrong.
          </li>
        </ul>
      </div>
      <button
        onClick={onBack}
        className="rounded-2xl bg-brand-600 px-6 py-3.5 text-sm font-bold text-white shadow-card transition hover:bg-brand-700"
      >
        Back to my orders
      </button>
    </div>
  );
}
