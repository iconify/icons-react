import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9cv03zhd.css';
import '../../css/y/ywys0bcog.css';
import '../../css/m/ma0-lhh3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9cv03zhd"/><path class="ywys0bcog"/><path class="ma0-lhh3s"/>`,
		"fallback": "streamline-ultimate:wifi-signal-2-bold",
	});
}

export default Component;
