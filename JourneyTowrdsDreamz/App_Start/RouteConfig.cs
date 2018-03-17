using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace JourneyTowrdsDreamz
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Login", id = UrlParameter.Optional },
                constraints: new
                {
                    serverRoute = new ServerRouteConstraint(url =>
                    
                    {
                        string a = url.PathAndQuery;
                        string path = string.Empty;
                        if (a == "/Home")
                        {
                            path = "/Home";
                        }
                        if (a == "/User/SaveUser")
                        {
                            path = "/User/";
                        }
                        if (path == "")
                        {
                            path = "/Home";
                        }
                        return url.PathAndQuery.StartsWith(path,
                                System.StringComparison.InvariantCultureIgnoreCase);

                    })
                }
            );

            routes.MapRoute(
                     name: "angular",
                     url: "{*url}",
                     defaults: new { controller = "Home", action = "Index" }
                );
        }
    }

    public class ServerRouteConstraint : IRouteConstraint
    {
        private readonly Func<Uri, bool> _predicate;

        public ServerRouteConstraint(Func<Uri, bool> predicate)
        {
            this._predicate = predicate;
        }

        public bool Match(HttpContextBase httpContext, Route route, string parameterName,
            RouteValueDictionary values, RouteDirection routeDirection)
        {
            return this._predicate(httpContext.Request.Url);
        }
    }
}
