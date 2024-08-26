import React from 'react';
import Modal from '../components/modal/Modal';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const AddTask = () => {

    const [isModalOpen, setIsModalOpen] = useState(true)

    const handlePrimaryAction = () => {
      console.log('Account deactivated')
      setIsModalOpen(false)
    }
  
    const handleSecondaryAction = () => {
      setIsModalOpen(false)
    }

  return (
   <>
       <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Deactivate account"
      content="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
      icon={<ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />}
      primaryActionText="Deactivate"
      primaryAction={handlePrimaryAction}
      secondaryActionText="Cancel"
      secondaryAction={handleSecondaryAction}
    />
   
   </>
  )
}

export default AddTask