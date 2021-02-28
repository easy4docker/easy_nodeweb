# -- Add docker app ... <%=@serverName %> --

cd <%=@dockerSettingPath %>

docker build -f <%=@dockerFile %> -t <%=@siteImage %> .

docker container stop <%=@siteContainer %> > /dev/null 2>&1

docker container rm <%=@siteContainer %> > /dev/null 2>&1

docker run -d <%=@cmdPorts  %> -v "<%=@shareFolder %>":/var/_shareFolder -v "<%=@dockerCodePath%>":/var/_localApp -v "<%=@dockerDataPath%>":/var/_localAppData -v "<%=@dockerEnvPath%>":/var/_localAppEnv --network network_easydocker --name <%=@siteContainer %>  <%=@siteImage %>
