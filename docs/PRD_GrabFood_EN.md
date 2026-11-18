# Product Requirements Document (PRD)

## GrabFood -- Improving Post-Checkout Communication and Order Requests

**Status:** Draft for MVP / website prototype\
**Version:** 1.0\
**Platform:** Responsive website prototype\
**Language:** English

------------------------------------------------------------------------

## 1. Product Overview & Problem

### 1.1 Product Summary

This product is a proposed improvement to the GrabFood user experience,
focusing on communication between customers and restaurants after an
order has been checked out. The website prototype demonstrates how
customers can submit or clarify an order-related request, check whether
the request has been acknowledged by the restaurant, and understand the
available next steps if the request cannot be fulfilled.

This concept is based on the GrabFood UX case study discussed in the
Interaction Design worksheet. The example scenario is a customer who
realizes after checkout that they want to request a drink with **less
ice**.

### 1.2 Background

In a food-ordering flow, customers select a restaurant and menu items,
complete checkout and payment, and then wait for the restaurant to
prepare the order. The UX problem identified in the worksheet is that
customers may have difficulty communicating an additional request or
clarifying an order note after checkout.

When customers realize that they need to provide an instruction after
payment, there may be no clear and convenient way to contact the
restaurant or update the order note. As a result, customers may be
unsure whether their request has been received and understood. For
example, a customer may only remember to request **less ice** for a
drink after submitting the order.

The core problem is not only the ability to edit an order note. It is
also the lack of communication certainty: whether the request was
successfully submitted, whether the restaurant has acknowledged it, and
what the customer can do if the request cannot be fulfilled.

### 1.3 Problem Statement

GrabFood customers need a clear way to submit or clarify order
instructions after checkout because they may remember an additional
request only after payment and have no certainty that the restaurant has
received and understood it.

### 1.4 Product Objectives

-   Provide an easy-to-find communication entry point after checkout.
-   Allow customers to submit order-related requests while the order is
    still eligible.
-   Clearly communicate the status of submitted requests.
-   Explain the time limit for submitting requests so customers
    understand when changes may still be possible.
-   Provide next-step guidance when a restaurant cannot fulfill a
    request.

### 1.5 Product Principles

1.  **Clarity:** Customers understand how to submit a request and check
    its status.
2.  **Transparency:** The system must not promise that every request
    will be fulfilled.
3.  **Timeliness:** Customers are informed about the request submission
    window.
4.  **Contextual communication:** Requests are associated with an active
    order and the restaurant handling it.
5.  **Minimal disruption:** Requests can only be submitted while the
    order status allows them.

------------------------------------------------------------------------

## 2. Target Persona & User Needs

### 2.1 Primary Target User

GrabFood customers who order food or drinks through the platform,
especially customers who sometimes remember a special instruction only
after checkout.

### 2.2 User Persona

**Name:** Raka\
**Type:** Composite persona based on the UX activities and interview
discussion from the previous worksheet.\
**Role:** GrabFood customer.

**Behaviors and habits** - Browses restaurants and selects menu items
through GrabFood. - Completes checkout and payment through the app. -
Waits for the restaurant to prepare the order and for delivery to
begin. - May realize that an additional instruction is needed after the
order has been submitted.

**Goals** - Receive food or drinks prepared according to personal
preferences. - Communicate instructions correctly to the restaurant. -
Know whether the restaurant has received the request. - Understand what
to do if the request cannot be fulfilled.

**Frustrations** - Difficulty finding a way to contact the restaurant
after checkout. - Uncertainty about whether an order note or additional
request can be submitted after payment. - No clear confirmation that the
restaurant has read or accepted the request. - Uncertainty about
alternatives when the request cannot be fulfilled.

### 2.3 User Needs

Using the user-needs statement format from the PRD material:

> GrabFood customers need a way to submit or clarify order instructions
> after checkout so that the restaurant can understand the request and
> customers can receive clear information about its status.

More specific needs:

-   Customers need an easily accessible communication entry point on the
    active order details page.
-   Customers need a way to write a request related to an order or a
    specific item.
-   Customers need confirmation that their request has been submitted
    successfully.
-   Customers need to know whether the request is waiting for a
    response, accepted, or unable to be fulfilled.
-   Customers need information about the time limit for submitting a
    request.
-   Customers need guidance or alternatives when the restaurant cannot
    fulfill the request.

### 2.4 Supporting Users and Stakeholders

  -----------------------------------------------------------------------
  Stakeholder                         Interest
  ----------------------------------- -----------------------------------
  Customer                            Submit an instruction and check its
                                      status.

  Restaurant / Merchant               Receive and respond to customer
                                      requests based on operational
                                      capability.

  Delivery Partner                    Continue the delivery process based
                                      on the available order status.

  Grab Customer Support               Help resolve communication or
                                      order-related issues.

  Grab Product and UX Team            Design a clear and consistent
                                      communication flow.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 3. Goals & Success Metrics

### 3.1 Product Goals

  -----------------------------------------------------------------------
  ID                                  Goal
  ----------------------------------- -----------------------------------
  G-01                                Customers can find the request
                                      entry point from an active order
                                      details page.

  G-02                                Customers can write and submit an
                                      order-related request.

  G-03                                Customers can clearly view the
                                      status of their request.

  G-04                                Customers understand that request
                                      fulfillment depends on the
                                      restaurant's confirmation and
                                      capability.

  G-05                                Customers receive guidance when a
                                      request is declined or cannot be
                                      fulfilled.
  -----------------------------------------------------------------------

### 3.2 Success Metrics

Since this product is currently a UX prototype, the following metrics
are initial evaluation targets, not actual measured results.

  -----------------------------------------------------------------------
  Metric                              Initial success target
  ----------------------------------- -----------------------------------
  Task completion                     At least 90% of test participants
                                      can find the feature and submit a
                                      request without assistance.

  Status comprehension                At least 85% of participants can
                                      correctly explain each request
                                      status.

  Findability                         At least 90% of participants can
                                      find the request entry point from
                                      the order details page.

  Error rate                          No critical errors that cause a
                                      request to be submitted without
                                      user confirmation.

  User satisfaction                   Average ease-of-use rating of at
                                      least 4 out of 5 during usability
                                      testing.
  -----------------------------------------------------------------------

Suggested usability test scenario: a customer has completed checkout and
then wants to request **less ice** for a drink.

------------------------------------------------------------------------

## 4. Functional & Non-Functional Requirements

### 4.1 Functional Requirements

  -----------------------------------------------------------------------
  ID                      Requirement             Priority
  ----------------------- ----------------------- -----------------------
  FR-01                   The system displays the Must
                          details of an order     
                          that is currently being 
                          processed.              

  FR-02                   The system provides a   Must
                          **Submit a Request**    
                          entry point on the      
                          order details page      
                          while the order is      
                          still eligible for      
                          changes.                

  FR-03                   Customers can write an  Must
                          order-related request   
                          in a text field.        

  FR-04                   The system validates    Must
                          that the request is not 
                          empty before            
                          submission.             

  FR-05                   The system displays a   Must
                          request summary and     
                          asks the customer to    
                          confirm before          
                          submission.             

  FR-06                   After submission, the   Must
                          system displays a       
                          confirmation that the   
                          request has been        
                          submitted successfully. 

  FR-07                   The system displays     Must
                          request statuses:       
                          **Awaiting Response**,  
                          **Accepted**, and       
                          **Unable to Fulfill**.  

  FR-08                   The system displays the Should
                          request time limit      
                          based on the order's    
                          processing status.      

  FR-09                   The system provides an  Should
                          explanation and         
                          next-step guidance when 
                          a request cannot be     
                          fulfilled.              

  FR-10                   The system displays     Could
                          request history on the  
                          order details page.     

  FR-11                   The system provides     Could
                          example request text    
                          such as "Less ice" to   
                          help customers, without 
                          restricting them to the 
                          example.                
  -----------------------------------------------------------------------

**Prototype note:** Restaurant responses may be simulated using sample
data or demonstration controls. Real integration with GrabFood's
merchant systems is outside the MVP scope.

### 4.2 Business Rules

-   A request can only be submitted for an active order that has not
    reached a stage where changes are unavailable.
-   Submitting a request does not guarantee that the restaurant will
    accept it.
-   **Awaiting Response** means the request has been submitted but no
    decision has been recorded yet.
-   **Accepted** means the restaurant has approved the request in the
    prototype scenario.
-   **Unable to Fulfill** means the restaurant cannot carry out the
    request.
-   If the order has passed the request submission window, the
    submission action must be disabled or unavailable and the reason
    must be explained.
-   Customers must confirm their request before it is submitted.

### 4.3 Non-Functional Requirements

  -----------------------------------------------------------------------
  ID                      Category                Requirement
  ----------------------- ----------------------- -----------------------
  NFR-01                  Usability               The request submission
                                                  flow must be simple and
                                                  use clear,
                                                  understandable labels.

  NFR-02                  Responsiveness          The website must work
                                                  on desktop, tablet, and
                                                  smartphone screen
                                                  sizes.

  NFR-03                  Performance             Page transitions and
                                                  interface interactions
                                                  should feel responsive,
                                                  with a target UI
                                                  response time of no
                                                  more than 2 seconds
                                                  under normal test
                                                  conditions.

  NFR-04                  Accessibility           Text must have
                                                  sufficient contrast,
                                                  buttons must have clear
                                                  labels, and forms must
                                                  be keyboard accessible.

  NFR-05                  Feedback                Important actions such
                                                  as submitting,
                                                  cancelling, or failing
                                                  to submit must provide
                                                  clear feedback.

  NFR-06                  Consistency             Components, status
                                                  terminology, buttons,
                                                  and navigation patterns
                                                  must be consistent
                                                  throughout the
                                                  prototype.

  NFR-07                  Privacy                 The prototype must not
                                                  request or store
                                                  unnecessary personal or
                                                  payment information.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 5. Scope (In/Out) & User Stories

### 5.1 In Scope (MVP)

-   A responsive website prototype for a GrabFood customer scenario.
-   An active order overview using sample data.
-   An order details page.
-   An entry point for submitting a request after checkout.
-   A free-text request form.
-   Input validation and confirmation before submission.
-   A submission success state.
-   Request status views: Awaiting Response, Accepted, and Unable to
    Fulfill.
-   A time-limit state explaining when a request can no longer be
    submitted.
-   Simulated restaurant responses to demonstrate different request
    outcomes.

### 5.2 Out of Scope

-   Integration with GrabFood's official backend, database, or APIs.
-   Real Grab account login and authentication.
-   Payment processing, refunds, or transaction amount changes.
-   Real-time two-way chat with restaurants.
-   Actual push notifications or SMS.
-   Operational integration with merchant and delivery partner
    applications.
-   A guarantee that restaurants will accept or fulfill requests.
-   Changes to menu items, prices, delivery addresses, or delivery
    partners after checkout.
-   Restaurant or Customer Support operational dashboards.

### 5.3 User Stories

  -----------------------------------------------------------------------
  ID                      User Story              Priority
  ----------------------- ----------------------- -----------------------
  US-01                   As a customer, I want   Must
                          to open my active order 
                          details so that I can   
                          review my order         
                          information.            

  US-02                   As a customer, I want   Must
                          to find an option to    
                          submit a request after  
                          checkout so that I can  
                          communicate an          
                          instruction I           
                          remembered later.       

  US-03                   As a customer, I want   Must
                          to write a request such 
                          as "Less ice for the    
                          iced coffee" so that    
                          the restaurant          
                          understands my          
                          instruction.            

  US-04                   As a customer, I want   Must
                          to review and confirm   
                          my request before       
                          submission so that I    
                          can avoid mistakes.     

  US-05                   As a customer, I want   Must
                          to know whether my      
                          request was submitted   
                          successfully so that I  
                          do not have to guess.   

  US-06                   As a customer, I want   Must
                          to see whether my       
                          request is awaiting a   
                          response, accepted, or  
                          unable to be fulfilled  
                          so that I know what     
                          happens next.           

  US-07                   As a customer, I want   Should
                          to know the request     
                          submission time limit   
                          so that I understand    
                          when a change is still  
                          possible.               

  US-08                   As a customer, I want   Should
                          to receive an           
                          explanation when my     
                          request cannot be       
                          fulfilled so that I     
                          understand the          
                          available next steps.   
  -----------------------------------------------------------------------

### 5.4 Main User Flow

1.  The customer opens the website prototype.
2.  The customer views an order that is currently being processed.
3.  The customer opens the order details page.
4.  The customer selects **Submit a Request**.
5.  The customer writes an instruction, for example: "Please make the
    drink with less ice."
6.  The system validates the request.
7.  The system displays a summary for confirmation.
8.  The customer selects **Submit**.
9.  The system confirms that the request has been submitted.
10. The customer views the request status.
11. In demonstration mode, the status can be changed to **Accepted** or
    **Unable to Fulfill** to demonstrate possible outcomes.

------------------------------------------------------------------------

## 6. Acceptance Criteria

### AC-01 --- Open Order Details

-   **Given** the customer is on the prototype home page and an active
    order is available,
-   **When** the customer selects that order,
-   **Then** the system displays the order details and current order
    status.

### AC-02 --- Find the Request Feature

-   **Given** the customer opens an order that is still eligible for
    changes,
-   **When** the order details page is displayed,
-   **Then** the system displays a clearly labeled **Submit a Request**
    action.

### AC-03 --- Enter a Request

-   **Given** the customer opens the request form,
-   **When** the customer enters a request,
-   **Then** the entered text can be reviewed before submission.

### AC-04 --- Empty Form Validation

-   **Given** the request form is empty,
-   **When** the customer selects the submit action,
-   **Then** the system does not submit the request and displays a
    message explaining that the request is required.

### AC-05 --- Submission Confirmation

-   **Given** the customer has entered a request,
-   **When** the customer selects the continue action,
-   **Then** the system displays a request summary with options to
    confirm or cancel.

### AC-06 --- Successful Submission

-   **Given** the customer has confirmed the request,
-   **When** the customer selects **Submit**,
-   **Then** the system displays a successful submission message and
    sets the initial request status to **Awaiting Response**.

### AC-07 --- Display Request Status

-   **Given** a request has been submitted,
-   **When** the customer opens the order details page again,
-   **Then** the system displays the request status that matches the
    prototype scenario data.

### AC-08 --- Request Cannot Be Fulfilled

-   **Given** the request status is **Unable to Fulfill**,
-   **When** the customer views the request details,
-   **Then** the system explains that the restaurant cannot fulfill the
    request and displays the next-step guidance available in the
    prototype.

### AC-09 --- Request Time Limit

-   **Given** the order has reached a stage where changes are no longer
    available,
-   **When** the customer opens the order details page,
-   **Then** the request action is disabled or hidden, and the system
    displays an understandable explanation.

### AC-10 --- Responsive Layout

-   **Given** the website is opened on desktop or smartphone,
-   **When** the customer completes the main flow,
-   **Then** all information, forms, buttons, and statuses remain
    readable and usable without layout clipping.

------------------------------------------------------------------------

## 7. Assumptions, Constraints & Open Questions

This section separates the UX problem identified in the worksheet from
design decisions that are still assumptions.

### 7.1 Worksheet-Based Context

-   The UX case study focuses on the difficulty customers experience
    when submitting an additional request after checkout.
-   The example instruction is **less ice**.
-   The main issues are the lack of a clear communication path and
    uncertainty about whether the request has been received.
-   The composite persona used in the previous work is named **Raka**.
-   Relevant stakeholders include customers, merchants/restaurants,
    delivery partners, Customer Support, and the Product/UX team.

### 7.2 Prototype Assumptions

-   This website is a UX solution prototype, not an official Grab
    product or part of Grab's actual systems.
-   Order information and restaurant responses use dummy data.
-   Request statuses and status transitions can be simulated without
    contacting a real restaurant.
-   The request time limit is displayed as prototype information; actual
    operational rules must be validated with Grab and its merchants.
-   The feature focuses on order instructions, not transaction changes
    or order cancellation.

### 7.3 Open Questions for Further Validation

-   At which order status should customers still be allowed to submit a
    request?
-   Should the merchant be able to accept, decline, or ask for
    clarification?
-   Should a request apply to one specific item or the entire order?
-   What should happen if the merchant does not respond?
-   What information can be shown to customers without promising that
    the request will be fulfilled?

------------------------------------------------------------------------

## 8. Vibe Coding Implementation Priorities

Recommended implementation order to keep the MVP focused:

1.  **Page structure:** active orders page and order details page.
2.  **Request form:** text input, validation, and submit action.
3.  **Confirmation:** request summary before submission.
4.  **Request statuses:** Awaiting Response, Accepted, and Unable to
    Fulfill.
5.  **Time-limit state:** show what happens when the request feature is
    no longer available.
6.  **Responsive and usability polish:** ensure the flow works well on
    desktop and smartphone.

**Implementation principle:** Build the core flow first. Do not add
features outside the MVP scope, such as real login, payment, real-time
chat, or GrabFood API integration, before the required MVP functionality
is complete.

------------------------------------------------------------------------

## 9. Context References

This document is based on: - The Interaction Design worksheet's GrabFood
UX case study: customers have difficulty submitting a request after
checkout, with **less ice** as the example request. - Previous worksheet
discussions about the problem statement, user activities, target users,
stakeholders, empathy/persona, and user journey. - The presentation
**Product Design -- From Interview to PRD**, especially page 8 for the
PRD.md structure and pages 5--7 for translating user needs into a PRD
and defining scope, functional requirements, and success metrics.

This document is an initial specification for a website prototype.
Details not established by the worksheet are explicitly marked as
assumptions or items for further validation, not as facts about the
current GrabFood system.
