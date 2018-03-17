using DataAccessLayer;
using System.Collections.Generic;

namespace BusinessAccessLayer
{
    public class BusinessAccess
    {
        DataAccess objDataAccess = null;
        public BusinessAccess()
        {
            objDataAccess = new DataAccess();
        }

        public int IsUserExist(string userName, string password)
        {
            int isExist = objDataAccess.IsUserExist(userName, password);
            return isExist;
        }

        public int SaveUserDetails(User userDetails)
        {
            int isExist = objDataAccess.SaveUserDetails(userDetails);
            return isExist;
        }

        public List<Consumer> ListConsumer()
        {
            var consumerRecord = objDataAccess.ConsumerList();
            return consumerRecord;
        }

    }
}