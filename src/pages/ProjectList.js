import React from "react";
import { Badge } from "react-bootstrap";

function ProjectList({ ProjectListVal }) {
  

  return (
    <div>
      {ProjectListVal &&
        ProjectListVal.map((Obj, index) => {
          return (
            <a
              key={`project-list-item-${index}`}
              className="project_list_item_link"
              /* onClick={() => Obj?.projectRoute && history.push(`${Obj.projectRoute}`)} */
              href={Obj.projectRoute}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div
                style={{
                  background:
                    `linear-gradient(120deg,` +
                    Obj.initialColor +
                    `,` +
                    Obj.finalColor +
                    `)`,
                }}
                className="project_list_item"
              >
                {Object.keys(Obj.badgeTitle).map((item, index) => {
                  return (
                    <Badge pill variant="primary" className="chip">
                      {Obj.badgeTitle[item]}
                    </Badge>
                  );
                })}
                <Badge pill variant="secondary" className="chip">
                  {Obj.language}
                </Badge>
                <p>{Obj.title}</p>
              </div>
            </a>
          );
        })}
    </div>
  );
}

export default ProjectList;
