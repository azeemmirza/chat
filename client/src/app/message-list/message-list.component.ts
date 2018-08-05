import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  messages = [
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
      },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    },
    { sender : { name: 'Time Berner', picture: 'assets/blank.png'},
      message : { text : 'This is message, lorep ipsum epsum epsum epsum', time : '2018-07-14 17:29:44' }
    }
  ];
  constructor() { }

  ngOnInit() {}

  calTime ( datetime) {


    //console.log('Provided DTG: ' + new Date(datetime));
    //console.log('Current DTG: ' + new Date());

    //datetime = typeof datetime !== 'undefined' ? datetime : "2014-01-01 01:02:03.123456";
    datetime = new Date( datetime ).getTime();

    let now = new Date().getTime();


    if( isNaN(datetime) )
    {
      return "";
    }

    //console.log( datetime + " " + now);
    let milisec_diff;
    if (datetime < now) {
      //console.log('check');
      milisec_diff = now - datetime;
    }else{

      milisec_diff = datetime - now;
    }

    let days = Math.floor(milisec_diff / 1000 / 60 / (60 * 24));

    let date_diff = new Date( milisec_diff );

   // console.log(days + " Days "+ date_diff.getHours() + " Hours " + date_diff.getMinutes() + " Minutes " + date_diff.getSeconds() + " Seconds");

    if (days) {
      return days + ' d';
    } else if (date_diff.getHours()) {
      return date_diff.getHours() + ' h';
    } else if (date_diff.getMinutes()) {
      return date_diff.getMinutes() + ' m';
    }else {
      return 'now';
    }



  }

}
