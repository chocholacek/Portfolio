using System;

namespace Portfolio.Data
{
    public class Item
    {
        private DateTime _from;

        private DateTime _to;

        public string Title { get; set; }

        public bool HasDates { get; private set; }

        public bool Current { get; set; }

        public DateTime From 
        { 
            get => _from; 
            set 
            {
                HasDates = true; 
                _from = value;
            }
        }

        public DateTime To
        {
            get => _to;
            set
            {
                HasDates = true;
                _to = value;
            }
        }

        public string Location { get; set; }

        public string Description { get; init; }
    }
}