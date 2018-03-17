using DataAccessLayer;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace DataAccessLayer
{

    public class DataAccess
    {
        JourneyTowardsDreamzEntities journeyContext = null;
        public DataAccess()
        {
            journeyContext = new JourneyTowardsDreamzEntities();
        }

        public int IsUserExist(string userName, string password)
        {
            int flag = 0;
            using (journeyContext)
            {
                userName.Substring(0, 2);
                int isUSerExist = journeyContext.Users.Where(x => (x.UserName == userName && x.Password == password)).FirstOrDefault().RoleId;

                switch (isUSerExist)
                {
                    case 1:
                        flag = isUSerExist;
                        break;
                    case 2:
                        flag = isUSerExist;
                        break;
                    case 3:
                        flag = isUSerExist;
                        break;

                }

            }
            return flag;
        }

        public int SaveUserDetails(User userDetails)
        {
            int i = 0;
            try
            {
                userDetails.RoleId = 2;
                userDetails.IsActive = true;
                userDetails.CreatedDate = DateTime.Now;
                journeyContext.Users.Add(userDetails);
                i = journeyContext.SaveChanges();
                if (i > 0)
                {
                    i = 1;

                }

            }
            catch (System.Exception EX)
            {
                string message = EX.Message;
                return i;
            }
            return i;
        }

        public List<Consumer> ConsumerList()
        {             
            using (journeyContext)
            {
               // var consumersList = journeyContext.Consumers.ToList();
                var consumerRecordList = journeyContext.Consumers.ToList();
                var j = consumerRecordList.Select(x => new
                {
                    ConsumerId = x.ConsumerId,
                    ConsumerName = x.ConsumerName,
                    EmailId = x.EmailId,
                    Password = x.Password,
                    CompanyName = x.CompanyName,
                    ContactPerson = x.ContactPerson,
                    ContactNumber = x.CompanyName,
                    Designation = x.Designation,
                    OfficeAddress = x.OfficeAddress,
                    Country = x.Country,
                    SubscriptionId = x.SubscriptionId,
                    IsActive = x.IsActive,
                    RoleId = x.RoleId
                }).ToList();

                return consumerRecordList;
            }
//            return consumerRecordList;
        }
    }
}


