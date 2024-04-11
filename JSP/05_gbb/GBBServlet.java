import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/GBBServlet")
public class GBBServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public GBBServlet() {
        super();    
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String[] gbb = {"gawi.jpg", "bawi.jpg", "bo.jpg"};		//가위바위보
		String[] result = {"win.jpg", "lose.jpg", "draw.jpg"};	//결과	
		
		int my = Integer.parseInt(request.getParameter("my"));
		//System.out.println("my: " + my);
		
		int com = (int) (Math.random() * 3);
		System.out.println("com: " + com);
		
		//내가 낸것 //컴퓨터가 낸것 // 이미지로 Display
		response.setContentType("text/html; char=utf-8");
		
		PrintWriter out = response.getWriter();
		
		  out.append("<html><head><title>가위바위보게임</title></head><body><table>")
		  .append("<tr><td>my</td><td>com</td></tr>")
		  .append("<tr><td><img alt='내가 낸것' src='img/" + gbb[my] + "' height='150'></td>")
		  .append("<td><img alt='com이 낸것' src='img/" + gbb[com] + "' height='150'></td></tr>")
		  .append("</table></body></html>");
		 

		out.close();
		
	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
