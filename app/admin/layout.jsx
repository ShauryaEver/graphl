import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "Graphl. - Admin",
    description: "Graphl. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
