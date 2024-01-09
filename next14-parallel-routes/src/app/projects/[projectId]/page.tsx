import React from "react";

const ProjectIDPage = ({ params }: { params: { projectId: string } }) => {
  return <div>Project ID: {params.projectId}</div>;
};

export default ProjectIDPage;
