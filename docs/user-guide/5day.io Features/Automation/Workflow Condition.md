# Workflow Conditions

**Conditions** are the smart filters that decide if your workflow should actually run after the trigger fires. Without them, every trigger would blindly execute actions. With them, you add precision: "Only if this AND that... OR if this other thing..."

## **Why use Conditions**

-   Catch only the tasks that matter (e.g., ignore low-priority stuff).
-   Prevent automation spam (no more 50 notifications for every tiny change).
-   Handle complex real-world rules without creating 10 separate workflows.

## Subscription

## **How Conditions work** 
After a trigger fires, 5day.io checks your conditions **from left to right**.

-   **AND** (default between main conditions): All must be true
-   **OR** (when you nest): At least one group must be true Conditions apply to **the task/subtask that triggered** the workflow.

**Nested Logic** This is where it gets powerful. Click **+ Add Nested** to create groups with OR inside AND (or vice versa):
| Logic Type | What it means | When to use | Example |
|--|--|--|--|
| AND (main level) | All conditions must be true | Strict rules | Priority is High AND Assignee is Sarah |
| OR (nested) | Any one nested condition is true | Flexible options | Priority is Highest OR Tag contains "urgent" |
| Nested AND/OR | Mix them for pro-level control | Complex scenarios | (Priority High OR Tag "urgent") AND Due Date is today |

### Available Fields & Operators

| Field Type | Operators | Examples |
|--|--|--|
| Textbox | Equal, Does not Equal, Contains, Does not Contains | Task Name contains Blog |
| Dropdown | Is One Of, Is Not One Of, Equals, Not Equals, Is Empty, Is not Empty | Tags Is Empty |
| Date | On or Before, On or After, Equals, Not Equals, Before, After, Is Empty, Is Not Empty | Start Date is On or Before 3rd Jan 2025 |
| Time | On or Before, On or After, Equals, Not Equals, Before, After, Is Empty, Is Not Empty | Time is After 3:00 PM |
| Number | Greater Than, Less Than, Greater Than or Equal, Less Than or Equal, Equals, Not Equals, Is Empty, Is Not Empty | Estimation is Greater Than 5d |
| Percentage | Greater Than, Less Than, Greater Than or Equal, Less Than or Equal, Equals, Not Equals, Is Empty, Is Not Empty | Progress is Greater Than 60% |

Conditions make your automations bulletproof. Start simple (one condition), then nest as you need more smarts.

## Other References

