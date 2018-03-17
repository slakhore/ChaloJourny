using BusinessAccessLayer;
using DataAccessLayer;
using System.Collections.Generic;
using System.Web.Mvc;


namespace JourneyTowrdsDreamz.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        BusinessAccess objBusinessAccess = null;
        public UserController()
        {
            objBusinessAccess = new BusinessAccess();
        }


        public ActionResult Index()
        {
            return View();
        }

        

        public ActionResult SaveUser(User user)
        {
            int i = objBusinessAccess.SaveUserDetails(user);
            return Json(i, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ShowConsumer(List<Consumer> consumer)
        {
            var i = objBusinessAccess.ListConsumer();
            return Json(i, JsonRequestBehavior.AllowGet);
        }
    }
}