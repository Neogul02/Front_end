<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<%!int cnt = 0; // class 멤버 변%>

	<%
	cnt = cnt + 1; // 지역변,doGet 이 호출될때마다++ 초기화
	// cnt = 16 이라면 , 1, 6
	
	String cntStr = Integer.toString(cnt);
	for (int i=0; )
	%>

	<img alt="sample" src="./img/<%=cnt%>.png" width="300">
	
</body>
</html>