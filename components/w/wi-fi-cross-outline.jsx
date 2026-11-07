import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_vrrliit.css';
import '../../css/n/n-jx8c_mo.css';
import '../../css/p/pb5pipz8a.css';
import '../../css/q/qya8g87br.css';
import '../../css/v/v0yar7wgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_vrrliit"/><path class="n-jx8c_mo"/><path class="pb5pipz8a"/><path class="qya8g87br"/><path class="v0yar7wgg"/>`,
		"fallback": "solar:wi-fi-cross-outline",
	});
}

export default Component;
