import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/g0dbnccie.css';
import '../../css/g/g6jfxzgwh.css';
import '../../css/l/ltrug9brs.css';
import '../../css/g/gq-rtm7ty.css';
import '../../css/d/d48zf2voo.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmOY9MQJc"><g class="s9cl3zbei"><path clip-rule="evenodd" class="g0dbnccie"/><path class="g6jfxzgwh"/><path clip-rule="evenodd" class="ltrug9brs"/><path class="gq-rtm7ty"/><path class="d48zf2voo"/></g></mask></defs><path mask="url(#SVGmOY9MQJc)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:zip",
	});
}

export default Component;
