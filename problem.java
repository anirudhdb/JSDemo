public class problem
{
    public static int numberOfPages(int records , int perPage)
    {
        if(records % perPage == 0)
        {
            return (records/perPage);
        }
        else{
                return ((records/perPage) + 1);
            }
    }

    public static void main(String[] args) {
        
        System.out.println(numberOfPages(10,4));
    }
}