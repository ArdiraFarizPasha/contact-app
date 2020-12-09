import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App.js'
// import ContactCard from './components/ContactCard'
// import { Link } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() })

// describe('ContactCard', () => {
//     it('should show text', () => {
//         const wrapper = shallow(<ContactCard />)
//         const text =  wrapper.find('div div div label')
//         expect(text.text()).toBe('Name:')
//     })
// })

describe('App', () => {
    it('should show text', () => {
        const wrapper = shallow(<App />)
        const text =  wrapper.find('div h2')
        expect(text.text()).toBe('ContApp')
    })
})

// describe('Home', () => {
//     it('should show text', () => {
//         const wrapper = shallow(<App />)
//         const button = wrapper.find('Link')
//         Link.simulate('click')
//         const text = wrapper.find('div nav Link')
//         expect(text.text()).toBe('Favorite Contact')
//     })
// })