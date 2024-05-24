'use client'

import { IoCloseOutline, IoMenu } from 'react-icons/io5'
import Image from 'next/image'
import AmazonHackingLogo from 'public/images/AmazonHackingColoredLogo.svg'
import { Button, Link, Badge } from '@/components/atoms'
import { LoggedMenuProps } from './types'
import { cn } from '@/services/utils/className.utils'
import { useMenu } from '@/contexts/menu'
import { signOut } from 'next-auth/react'

import * as Dialog from '@radix-ui/react-dialog'

const Logged = ({ name, email, image, ...props }: LoggedMenuProps) => {
  const names = name?.split(' ') as string[]
  const uName: string = names[0] + ' ' + names[names.length - 1]

  const { open, handleOpenChange } = useMenu()

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger className='fixed w-fit h-fit right-0 top-0 z-50 transition-opacity duraiton-200 ease-linear data-[state=open]:opacity-0 mr-4 xs:mr-[42px] md:mr-[62px] mt-9 lg:hidden'>
        <IoMenu size={46} />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed w-full h-full top-0 flex justify-end bg-black bg-opacity-40 data-[state=open]:animate-menuOverlayShow data-[state=closed]:animate-menuOverlayHide overflow-y-auto lg:hidden z-50'>
          <Dialog.Close
            className={cn(
              'fixed w-fit h-fit inset-0 top-0 left-[100%] z-10 opacity-0 transition-all duration-200 ease-linear -translate-x-full pr-[42px] md:pr-[62px] mt-9',
              open && 'z-50 pointer-events-auto opacity-100'
            )}
          >
            <IoCloseOutline size={46} />
          </Dialog.Close>
          <Dialog.Content
            className='relative data-[state=open]:animate-menuOpen data-[state=closed]:animate-menuClose'
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <div className='flex flex-col items-start justify-start bg-black w-[min(364px,100vw)] md:w-[405px] h-fit rounded-l-[30px] py-20 px-14 min-h-screen md:min-h-[806px] gap-10'>
              <button>
                <Image src={AmazonHackingLogo} alt='Amazon Hacking Logo' />
              </button>
              <div className='flex flex-col items-start justify-start gap-[18px]'>
                <h2 className='text-[#979797] font-medium text-sm tracking-[0.168px]'>
                  Menu
                </h2>
                <Link
                  href='/'
                  className='font-medium text-20 tracking-[0.24px] text-white'
                >
                  O Programa
                </Link>
                <Link
                  href='/'
                  className='font-medium text-20 tracking-[0.24px] text-white'
                >
                  Edições
                </Link>
                <Link
                  href='/'
                  className='font-medium text-20 tracking-[0.24px] text-white'
                >
                  Vencedores
                </Link>
                <Link
                  href='/'
                  className='font-medium text-20 tracking-[0.24px] text-white'
                >
                  Patrocinadores
                </Link>
              </div>

              <div className='flex flex-col items-start justify-start gap-[18px]'>
                <h2 className='text-[#979797] font-medium text-sm tracking-[0.168px]'>
                  Projetos
                </h2>
                <Button>Ver Soluções</Button>
              </div>
              <div className='flex flex-col items-start justify-start gap-[18px]'>
                <div className='flex gap-[10px] items-center justify-center'>
                  <Link className='font-medium text-20 tracking-[0.24px] text-white pointer-events-none opacity-50'>
                    Área do aluno
                  </Link>
                  <Badge>Em Breve</Badge>
                </div>
                <Link
                  href='/'
                  className='font-medium text-20 tracking-[0.24px] text-white'
                >
                  Ingressos
                </Link>
                <Link
                  href='/'
                  className='font-medium text-20 tracking-[0.24px] text-white'
                >
                  Programação
                </Link>
                <Link
                  href='/'
                  className='font-medium text-20 tracking-[0.24px] text-white'
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}
                >
                  Sair
                </Link>
              </div>
              <div className='flex items-center justify-center gap-5'>
                <div className='w-[52px] h-[52px] bg-gradient-to-bl from-[#005194] via-[#005194] to-[#70BAE9] rounded-full flex items-center justify-center flex-shrink-0'>
                  <div className='relative w-12 h-12 rounded-full overflow-hidden'>
                    <Image
                      src={image || ''}
                      alt='Imagem do perfil do usuário'
                      fill
                    />
                  </div>
                </div>
                <div className='flex flex-col'>
                  <span className='font-bold text-base tracking-[0.32px]'>
                    {uName}
                  </span>
                  <span
                    title={email as string}
                    className='font-medium tracking-[0.2px] text-xs truncate w-full max-w-[20ch] xs:max-w-[30ch]'
                  >
                    {email}
                  </span>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Logged
