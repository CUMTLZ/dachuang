package controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import dao.DAOFactory;
import model.User;
import net.sf.json.JSONObject;

/**
 * Servlet implementation class UserServlet
 */
@WebServlet("/user")
public class UserServlet extends HttpServlet {
	public void doGet(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
        
		
		
		String path = "index.html" ;     
        String userid = request.getParameter("id") ;
        String userpass = request.getParameter("password") ;
        response.setContentType("utf-8"); 
        response.setCharacterEncoding("utf-8"); 
        JSONObject jsonObject = new JSONObject();  //����Json����
 
        HttpSession session = request.getSession(true);
        
        if(session.getAttribute("user")!=null){
        	jsonObject.put("code", "1");         //����Json���������
            jsonObject.put("message", "已经登录");
        }else{
        
        	if(userid==null || "".equals(userid)){
        		jsonObject.put("code", "0");         //����Json���������
                jsonObject.put("message", "用户名不能为空");
        	}else if(userpass==null || "".equals(userpass)){
        		jsonObject.put("code", "0");         //����Json���������
                jsonObject.put("message", "密码不能为空");
        	}else { 
        		User user = new User() ;
        		user.setUserid(userid) ;
        		user.setPassword(userpass) ;
        		try{
        			if(DAOFactory.getIUserDAOInstance().findLogin(user)){	
        				session.setAttribute("user", userid);
        				jsonObject.put("code", "1");         //����Json���������
                        jsonObject.put("message", "success!");
                        JSONObject data=new JSONObject();
                        data.put("id", userid);
                        jsonObject.put("data", data.toString());
        			} else {
                    	jsonObject.put("code", "0");         //����Json���������
                        jsonObject.put("message", "Failed");
                    }
               }catch(Exception e){
                e.printStackTrace() ;
               }
        	}
        }
        response.getWriter().write(jsonObject.toString());
        
    }
    public void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException,IOException{
        this.doGet(request,response) ;
    }
 

}
