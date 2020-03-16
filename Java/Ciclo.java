public class Ciclo {
 public static void main (String args []) {
   int i;

   for (i=1; i<=9; i++){
    System.out.print(i + ", ");
   }
   System.out.print(i);
   System.out.println(" ");
   i=1;
   
   while (i<=5){
    if (i==5) {
    System.out.print(i +", ");
    System.out.print(100-i);
    } else {
    System.out.print(i +", ");
    System.out.print(100-i + ", ");
    }
    i++;
   }
   i=0;
   System.out.println(" ");

   int a=1, b=0, c=0;
   do {
     if (i==0){
       System.out.print(b + ", " + a +", ");
     } else if (i==8) {
       System.out.print(a + b); 
     } else {
       c = a + b;
       System.out.print(c + ", ");
       b = a;
       a = c;
     }
     i++;
   }while(i<=8);

  }
 }