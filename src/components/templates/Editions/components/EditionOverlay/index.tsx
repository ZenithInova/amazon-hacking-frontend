'ues client'

import {
    Overlay,
    OverlayTrigger,
    OverlayContent,
} from '@/components/atoms/Overlay'
import { EditionOverlayProps } from './types'
import Image from 'next/image'
import { useBreakpoint } from '@/services/utils/useBreackpoint'
import { cn } from '@/services/utils/className.utils'

import InstagramIcon from 'public/icons/instagram.svg'
import WhatsappIcon from 'public/icons/whatsapp.svg'
import XIcon from 'public/icons/twitter.svg'

import FirstWaveTop from 'public/ProjectOverlayWaves/Mobile/FirstWaveTop.svg'
import FirstWaveBottom from 'public/ProjectOverlayWaves/Mobile/FirstWaveBottom.svg'

import SecondWaveMobile from 'public/ProjectOverlayWaves/Mobile/SecondWave.png'
import SecondWaveTablet from 'public/ProjectOverlayWaves/Tablet/SecondWave.png'

import PersonalGoals from 'public/PersonalGoals.svg'

import { Button } from '@/components/atoms'
import { useTranslations } from 'next-intl'
import challenger from 'public/EditionOverlayFlatArt.svg'
import waveMobile from 'public/WaveMobileEditionOverlay.svg'
import waveTablet from 'public/WaveTabletEditionsOverlay.svg'
import OnçasIsland from 'public/OnçasIslandMB.svg'
import OnçasIslandMD from 'public/OnçasIslandMD.svg'


const EditionOverlay = ({
    edition,
    image,
}: EditionOverlayProps) => {
    const t = useTranslations("EditionsOverlay");
    const breakpoint = useBreakpoint()

    let waveImageSrc = waveMobile
    let islandImage = OnçasIsland

    if (breakpoint === 'md') {
        waveImageSrc = waveTablet
        islandImage = OnçasIslandMD
    } else if (breakpoint === 'lg' || breakpoint === 'xl') {
        waveImageSrc = waveTablet
        islandImage = OnçasIslandMD
    }

    return (
        <Overlay>
            <OverlayTrigger asChild>
                <Button variant='primary' className='px-10'>
                    Saber Mais...
                </Button>
            </OverlayTrigger>
            <OverlayContent className='relative' theme='dark'>
                <div className='flex flex-col items-center justify-center relative w-full h-full overflow-visible md:gap-[111px]'>
                    <div className='relative h-full w-full flex justify-center top-0 rounded-t-lg mb-9'>
                        <Image src={islandImage} alt='Local onde os projetos do amazon hacking 2022 foram implementados' className='rounded-t-[30px] md:w-full' />
                        <div className='flex flex-col items-center gap-y-4 md:gap-y-2 w-full absolute top-14'>
                            <p className='text-18 z-10 text-white md:text-18  lg:text-26'>{edition === '2022' ? '1º Edição' : '2º Edição'}</p>
                            <p className='text-[42px] z-10 font-bold text-white md:text-[42px] lg:text-60'>{edition === '2022' ? '2022' : '2023'}</p>
                            <p className='text-18 z-10 text-white md:text-18 lg:text-[22px]'>{edition === '2022' ? 'Ilha das Onças' : 'Ilha de Cotijuba'}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-5 px-8 items-center md:justify-center md:flex-row md:gap-5 md:px-14'>
                        <div className='flex flex-col gap-y-7 md:w-1/2'>
                            <h1 className='text-black text-40 font-bold leading-10 md:text-50 md:leading-65 lg:text-60 2xl'>Natureza Intocada</h1>
                            <p className='text-16 text-neutral-500 md:text-18 lg:text-20'>
                                A Ilha das Onças é uma das maiores ilhas fluviais do arquipélago do Rio Guamá, localizado próximo a Belém. É conhecida por sua rica biodiversidade, com vastas áreas de florestas preservadas que são habitat de diversas espécies de fauna e flora.
                            </p>
                            <p className='text-16 text-neutral-500 md:text-18 lg:text-20'>
                                Além da importância ecológica, a ilha possui uma comunidade ribeirinha que mantém um modo de vida tradicional, com atividades como pesca, pequena agricultura e, em alguns casos, turismo de base comunitária.
                            </p>
                        </div>
                        <div className='relative w-[300px] h-[230px] md:w-[330px] lg:w-[415px] lg:h-[288px]'>
                            <Image src={image} alt='flat art que representa uma ilha' fill />
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <Image src={waveImageSrc} alt='Flat Art de uam pessoa montando um quebra cabeça' className='w-[100vw]' />
                        <div className='z-20 flex absolute flex-col items-center h-full top-0 px-8 gap-y-7 md:gap-7 pt-28 md:px-14 md:flex-row-reverse lg:pt-0  2xl:pt-0 after:absolute after:w-full after:bottom-[-2px] before:absolute'>
                            <div className='flex flex-col items-center gap-y-7 md:items-start'>
                                <p className='text-40 font-bold w-fit md:text-50 lg:text-60'>Desafios Encontrados</p>
                                <p className='text-16 md:text-18 lg:text-20'>A gestão de recursos naturais, preservação ambiental e conectividade móvel são desafios constantes para os habitantes da comunidade da Usina Vitória, que enfrentam pressões como o desmatamento e a urbanização provenientes de Belém e áreas circunvizinhas. </p>
                                <Button className='z-30 w-fit'>Ver Soluções</Button>
                            </div>
                            <Image src={challenger} alt='Flat Art de uam pessoa montando um quebra cabeça' className='w-[260px] h-[260px] z-30 lg:h-[325px] lg:w-[325px]' />
                        </div>
                        <div className="w-full h-24 opacity-30 z-10 bg-tribalDecorator bg-repeat absolute bottom-[30%] lg:bottom-[10%]" />
                    </div>
                </div>
            </OverlayContent>
        </Overlay>
    )
}

export default EditionOverlay
