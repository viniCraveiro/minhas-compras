import { Package, Smartphone, TrendingUp } from "lucide-react";
import Image, { type ImageProps } from "next/image";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold text-blue-600 mb-2">
              Minhas Compras
            </h1>
            <p className="text-gray-600">
              Gerencie seus produtos e acompanhe preços em qualquer lugar.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Smartphone className="text-blue-500 mb-4" size={32} />
              <h2 className="text-xl font-semibold mb-2">Mobile First</h2>
              <p className="text-gray-500 text-sm">
                Use o app offline no supermercado para cadastrar preços
                rapidamente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <TrendingUp className="text-green-500 mb-4" size={32} />
              <h2 className="text-xl font-semibold mb-2">Histórico</h2>
              <p className="text-gray-500 text-sm">
                Acompanhe a variação de preços ao longo do tempo com gráficos
                detalhados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Package className="text-purple-500 mb-4" size={32} />
              <h2 className="text-xl font-semibold mb-2">Sincronização</h2>
              <p className="text-gray-500 text-sm">
                Seus dados salvos localmente são sincronizados com a nuvem
                quando houver internet.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-blue-600 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Pronto para começar?</h3>
            <p className="mb-6 opacity-90">
              Acesse o app mobile para começar a cadastrar seus produtos.
            </p>
            <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
              Baixar App Expo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
