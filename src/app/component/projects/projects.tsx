'use clients'
import Link from 'next/link'
import Image from 'next/image'
import { FMLProject, FractionProject, HealthCareProject, MetaGameProject, RudrakshProject } from '../../asset/image/img'
import './projects.scss'

export default function Projects(){
    return(
        <>
            <div className="project_sec" data-scroll-section>
                <ul>
                    <li>
                        <Link href="https://www.fml.club/" target="_blank">
                            <Image className="img-fluid" src={FMLProject} alt="image-project"/>
                        </Link>
                    </li>
                    <li>
                        <Link href="https://fraction.estate/" target="_blank">
                            <Image className="img-fluid" src={FractionProject} alt="image-project" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://main--sage-chebakia-9b1cd1.netlify.app/" target="_blank">
                            <Image className="img-fluid" src={HealthCareProject} alt="image-project" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://lovely-rabanadas-bd7058.netlify.app/" target="_blank">
                            <Image className="img-fluid" src={MetaGameProject} alt="image-project" />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://rudraksh-resume.netlify.app/" target="_blank">
                            <Image className="img-fluid" src={RudrakshProject} alt="image-project" />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}