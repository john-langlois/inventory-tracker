import java.util.Arrays;

public class PipeFilter {
    public static void main(String[] args) {
        float[] startArray = {4.5f, 12.7f, 11f, 18.9f, 7.90f, 5.32f};

        Arrays.sort(startArray);

        float[] updatedArray = new float[startArray.length - 2];

        for (int i = 0; i < updatedArray.length; i++) {
            updatedArray[i] = startArray[i+1];
        }

        for (int i = updatedArray.length - 1; i >= 0; i--) {
            double newTemp = updatedArray[i]*(9.0/5.0) + 32;
            System.out.printf("%.2f\n",newTemp);
        }

    }
}
