import { useState } from "react"
import { Particles } from "../sections/Particles"

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Data:", form)
    }

    return (
        <section className="relative flex items-center c-space py-12 md:py-20 overflow-hidden w-full" id='contact'>
            <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
            />
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col w-full items-start gap-5 mb-10">
                    <h2 className="text-heading">Let's Talk</h2>
                    <p className="font-normal text-neutral-400">
                        I'm currently seeking internship, freelance, and collaboration opportunities.
                        Feel free to reach out if you'd like to discuss a project, technology, or potential role.
                    </p>
                </div>

                <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="field-input field-input-focus"
                            autoComplete="name"
                            required
                            onChange={handleChange}
                            value={form.name}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="field-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="field-input field-input-focus"
                            autoComplete="email"
                            required
                            onChange={handleChange}
                            value={form.email}
                        />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="field-input field-input-focus"
                            required
                            onChange={handleChange}
                            value={form.message}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-gradient-to-r from-lavender to-royal hover-animation"
                    >
                        Let's Connect
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
