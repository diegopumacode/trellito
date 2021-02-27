import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrelloService {
  paramsModal = {}
  trello = [
    {
      "id": 1,
      "name": "Today Todo1",
      "users": [
        { name: "asd ", alias: "af" },
        { name: "Juanio Perez", alias: "CG" }
      ],
      "list": [
        {
          name: "TODO", items: [
            {
              id:1,
              name: "Add social networks...",
              description: "Type description here...",
              labels: "los labels",
              comments: [
                { name: "Diego Puma", alias: "DP", comment: "lorem ipsim 123asdasdasd" },
                { name: "Juanito Perez", alias: "JP", comment: "lorem ipsim 123asdasdasdasds" },
              ]
            },
            {
              name: "What are you looking for 2",
              description: "What are you looking for",
              labels: "What are you looking for",
              comments: [
                { name: "Diego Puma", alias: "DP", comment: "lorem ipsim 123" },
                { name: "Juanito Perez", alias: "JP", comment: "lorem ipsim 123" },
              ]
            }
          ]
        },
      ],
    },
    {
      "id": 2,
      "name": "Today Todo2",
      "users": [
        { name: "Diego Puma", alias: "DP" },
      ],
    },
    {
      "id": 3,
      "name": "Today Todo3",
      "users": [
        { name: "Codeka Gaming", alias: "CG" }
      ],
    }
  ]

  constructor() { }
}
