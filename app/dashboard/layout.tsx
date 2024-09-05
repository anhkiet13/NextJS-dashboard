import SideNav from '@/app/ui/dashboard/sidenav';
 

// Đoạn code này định nghĩa một component Layout sử dụng TypeScript. 
// Component này nhận một prop children có kiểu là React.ReactNode, 
// đại diện cho các phần tử con sẽ được render bên trong layout.

// Có lưu ý trong phần này là Next sẽ phân 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}