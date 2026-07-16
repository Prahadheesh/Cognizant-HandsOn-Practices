SET SERVEROUTPUT ON;

DECLARE
BEGIN
    FOR l IN (
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Customer ID '
            || l.CustomerID
            || ' - Loan ID '
            || l.LoanID
            || ' is due on '
            || TO_CHAR(l.DueDate,'DD-MON-YYYY')
        );
    END LOOP;
END;
/
