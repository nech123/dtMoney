import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransectionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransectionModalOpen] = useState(false);



  function handleOpenNewTransectionModal(){
    setIsNewTransectionModalOpen(true)
  }


  function handleCloseNewTransectionModal(){
    setIsNewTransectionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransectionModal}/>
      
      <Dashboard/>
    <NewTransactionModal
    isOpen={isNewTransactionModalOpen}
    onRequestClose={handleCloseNewTransectionModal}
    />
      

      <GlobalStyle/>
    </TransactionsProvider>
  );
}
