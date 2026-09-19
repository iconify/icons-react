import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkah-u8kr.css';
import '../../css/t/tfesq9c8z.css';
import '../../css/d/dvicfhbcp.css';
import '../../css/x/xf2_bdbsi.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-solid clr-i-solid-path-1 vkah-u8kr"/><path class="clr-i-solid clr-i-solid-path-2 tfesq9c8z"/><path class="clr-i-solid clr-i-solid-path-3 dvicfhbcp"/><path class="clr-i-solid clr-i-solid-path-4 xf2_bdbsi"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:wifi-solid",
	});
}

export default Component;
