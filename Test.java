import java.io.*;

public class Test {
  
  public void add(int m) {
    m = m + 2;
  } 

  public static void main(String[] args) {
    Test t = new Test();
    int x = 10;
    t.add(x);
    System.out.println(x);
  }
}
