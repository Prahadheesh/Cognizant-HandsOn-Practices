import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class SampleTest {

    @Test
    public void testAddition() {
        int a = 10;
        int b = 20;

        int result = a + b;

        assertEquals(30, result);
    }
}
