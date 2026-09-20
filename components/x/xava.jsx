import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8pln-eug.css';
import '../../css/m/mf521kb7u.css';
import '../../css/g/gj0x8hb9r.css';
import '../../css/x/xtyjrwb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8pln-eug"/><path class="mf521kb7u"/><path class="gj0x8hb9r"/><path class="xtyjrwb7q"/>`,
		"fallback": "token:xava",
	});
}

export default Component;
