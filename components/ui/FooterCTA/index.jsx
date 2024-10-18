import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Ready to Bring Your Vision to Life?
                </h2>
                <p className="mt-3 text-gray-600">
                Let&apos;s collaborate to turn your ideas into innovative solutions that drive success. Whether you have a project in mind or need guidance, our team is here to help.
                </p>
                <NavLink
                    href="mailto:info@orbis.social"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                   Get in Touch
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA