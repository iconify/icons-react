import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3eb4sd6f.css';
import '../../css/v/v-vpnibfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3eb4sd6f"/><path clip-rule="evenodd" class="v-vpnibfp"/>`,
		"fallback": "token:xno",
	});
}

export default Component;
