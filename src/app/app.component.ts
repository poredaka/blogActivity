import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mon blog';

  posts = [
    new Post("Mon premier post",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia in sem ac fringilla. Cras eleifend pellentesque fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam mollis dolor mi, sed mollis nulla blandit quis. Cras vehicula, libero at porttitor varius, tortor magna tempus quam, volutpat posuere ante quam eu risus. Etiam eget magna lacinia leo congue malesuada non eget velit. Nunc nec nibh a tellus dapibus scelerisque. Suspendisse ultrices risus at nisl condimentum, nec tempor magna cursus. Nam tellus augue, porta eu malesuada sit amet, volutpat et nibh. Nulla efficitur sit amet nisi sit amet pulvinar. Sed sit amet vestibulum urna.",
      0
    ),
    new Post("Mon deuxième post",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim tortor, bibendum eget elit vel, mattis congue nunc. Vivamus nibh nulla, euismod vitae odio a, lobortis gravida lectus. Duis placerat orci et nulla sollicitudin vulputate. Proin nec nulla eleifend, dapibus neque a, finibus purus. Quisque vitae ex nec lorem vehicula elementum ut eget tellus. Pellentesque at justo pretium, ultricies nisl quis, hendrerit nisi. Integer non ullamcorper dui, iaculis dignissim felis. Duis consequat mauris eu pretium consectetur. Morbi non dolor suscipit, placerat nunc ut, pretium sem. Vivamus sollicitudin velit sit amet ex mollis consectetur.",
        0
      ),
      new Post("Troisième post",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tellus eros, dapibus eget finibus et, tempus non ante. Vestibulum sit amet sem eu enim pellentesque malesuada. Praesent sodales justo vitae ornare blandit. Praesent pulvinar hendrerit velit quis sollicitudin. Vestibulum lacinia enim vel dapibus cursus. Aliquam venenatis, ligula vitae volutpat ultricies, neque nisi interdum odio, nec interdum purus ante in enim. Praesent eros diam, condimentum non placerat a, dictum ut ex. In sed dui blandit, semper lorem at, rhoncus nibh. Sed eget est facilisis, mattis nisi eget, gravida nibh. Etiam id mauris ipsum. Aenean vitae mattis lectus. Etiam at gravida ante. Duis leo arcu, dignissim ac mollis vel, placerat nec augue. Integer sagittis egestas odio ut vulputate.",
          0
      )
    ];

}
