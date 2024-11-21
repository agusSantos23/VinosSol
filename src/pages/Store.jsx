import { useTranslation } from "react-i18next"
import Layout from "../components/layout/Layout"



const Store = () => {

  const { t } = useTranslation()

  return (
    <main>
      <Layout >
        Caramelo
      </Layout>
      
    </main>
  )
}

export default Store
