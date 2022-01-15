import java.util.Scanner;

public class calc {

    static public void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        num n1 = new num();
        num n2 = new num();
        num res = new num();

        String opc = "Y";
        while (opc.equals("y") || opc.equals("Y")) {

            System.out.printf("%nEnter the value 1 : ");
            n1.setVal(scan.nextDouble());

            System.out.printf("%nEnter the value 2 : ");
            n2.setVal(scan.nextDouble());

            res.setVal(n1.getVal() + n2.getVal());

            System.out
                    .printf("%nThe sum of  " + n1.getVal() + " with " + n2.getVal() + " is " + res.getVal());
            System.out.printf("%nDo you want to calculate another value again? (y/n) ");
            opc = scan.next();
            System.out.printf("%n%n%n");
        }
    }
}
