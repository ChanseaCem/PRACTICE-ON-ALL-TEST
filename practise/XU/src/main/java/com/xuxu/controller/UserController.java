package com.xuxu.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSONObject;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.xuxu.model.BaseUser;
import com.xuxu.service.IUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.annotation.Resource;
import java.io.IOException;
import java.util.Random;


@Controller
@RequestMapping("/")
public class UserController {

    @Resource
    private IUserService userService;

    /**
     * 登录页面
     */
    /*@RequestMapping("xu_back/login.html")
    public String Login(HttpServletRequest request,HttpServletResponse response){

        request.setAttribute("pageName", "欢迎登录");
        return "/views/back/login";
    }*/

    @RequestMapping("/showUser.do")
    public void selectUser(HttpServletRequest request, HttpServletResponse response) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        long userId = Long.parseLong(request.getParameter("id"));
        BaseUser user = this.userService.selectUser(userId);
        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(user));
        response.getWriter().close();
    }

    @RequestMapping(value = "/userLogin.html", method = RequestMethod.POST)
    public void userLogin(HttpServletRequest request,HttpServletResponse response) throws IOException{
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        String name = request.getParameter("name");
        String pwd = request.getParameter("pwd");
        BaseUser user = null;
        try{
            user = this.userService.userLogin(name,pwd);
        }catch (Exception e){
            System.out.println(e);
        }
        ObjectMapper mapper = new ObjectMapper();
        JSONObject obj = new JSONObject();
        if(user != null){
            obj.put("msg","登录成功");
            obj.put("code",1);
        }else{
            obj.put("msg","账号不存在");
            obj.put("code",0);
        }
        response.getWriter().write(obj.toString());
    }

    @RequestMapping(value="/getcode.json",method = RequestMethod.POST)
    public void getCode(HttpServletRequest request,HttpServletResponse response) throws IOException{
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        Integer tel = Integer.parseInt(request.getParameter("tel"));

        try {
            Integer t = this.userService.getCode(tel);
            JSONObject obj = new JSONObject();
            Object obj2 = new Object();
            
            Random ra =new Random();
            System.out.println("---->>"+ra.nextInt(100000)+1);

            if(t>0){
                obj.put("code",1);
                obj.put("msg","验证码获取成功");
                obj.put("data",obj2);
            }else{
                obj.put("code",0);
                obj.put("msg","验证码获取失败");
                obj.put("data",obj2);
            }
            System.out.println("验证码获取===========》》正常");

        }catch (Exception e){

            System.out.println("验证码获取===========》》异常");
        }

    }

    @RequestMapping(value = "/getProfile.json",method = RequestMethod.POST)
    public void getProfile(HttpServletRequest request,HttpServletResponse response) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        Integer id = Integer.parseInt(request.getParameter("id"));
        try {
            String t = this.userService.getProfile(id);
            JSONObject obj = new JSONObject();

            if(t.toString() != ""){
                obj.put("code",1);
                obj.put("data",t);
                obj.put("msg","头像获取成功");
            }else{
                obj.put("code",0);
                obj.put("msg","头像获取失败");
                obj.put("data",t);
            }
            System.out.println("头像获取===========》正常");
            response.getWriter().write(obj.toString());

        }catch (Exception e){

            System.out.println("头像获取===========》异常");
        }
    }


}