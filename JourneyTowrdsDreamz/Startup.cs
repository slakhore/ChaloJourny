using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JourneyTowrdsDreamz.Startup))]
namespace JourneyTowrdsDreamz
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
