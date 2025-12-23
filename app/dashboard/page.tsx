export default function DashboardPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-rose-500 mb-6">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow">
          Stat Card 1
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          Stat Card 2
        </div>
        <div className="p-6 bg-white rounded-xl shadow">
          Stat Card 3
        </div>
      </div>
    </main>
  );
}
