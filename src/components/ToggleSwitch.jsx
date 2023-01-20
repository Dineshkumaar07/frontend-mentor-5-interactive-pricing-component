import React from 'react'

const ToggleSwitch = () => {
  return (
    <div>
        <label class="relative cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer"/>
            <div class="w-11 h-6 bg-gray-200 rounded-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:h-5 after:w-5 after:rounded-full  after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-gto"></div>
        </label>

    </div>
  )
}

export default ToggleSwitch