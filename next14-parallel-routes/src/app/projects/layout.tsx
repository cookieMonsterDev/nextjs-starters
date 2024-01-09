type LayoutProps = {
  children: React.ReactNode;
  projectslist: React.ReactNode;
};

const Layout = ({ children, projectslist }: LayoutProps) => {
  return (
    <div>
      {projectslist}
      {children}
    </div>
  );
};

export default Layout;
