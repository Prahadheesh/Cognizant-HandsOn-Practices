import static org.junit.Assert.*;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    int a;
    int b;

    @Before
    public void setUp() {
        a = 10;
        b = 20;
        System.out.println("Setup Method");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown Method");
    }

    @Test
    public void testAddition() {

        // Arrange
        int x = a;
        int y = b;

        // Act
        int result = x + y;

        // Assert
        assertEquals(30, result);
    }
}
