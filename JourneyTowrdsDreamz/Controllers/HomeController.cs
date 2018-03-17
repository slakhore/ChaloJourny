using BusinessAccessLayer;
using DataAccessLayer;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace JourneyTowrdsDreamz.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult GetRecord()
        {
            using (JourneyTowardsDreamzEntities entities = new JourneyTowardsDreamzEntities())
            {
                BusinessAccess objBusinessAccess = new BusinessAccess();
                var recordList = objBusinessAccess.ListConsumer();

                return Json(recordList, JsonRequestBehavior.AllowGet);
            }
        }


    }
}