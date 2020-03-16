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

   int a=1;
   do {
     if (i==0){
       System.out.print(i + ", " + a +", ");
       i++;
     } else if (i==8) {
       a = a+i;
       System.out.print(i) 
     } else {
       a = a + i;
       System.out.print(a + ", ");
       i++;
     }
   }while(i>=8)

  }
 }