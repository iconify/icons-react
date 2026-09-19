import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/pes2rjbyp.css';
import '../../css/w/wvce_1bui.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGmHOpzeFG"><g class="wwvp95byt"><path class="pes2rjbyp"/><path class="wvce_1bui"/></g></mask></defs><path mask="url(#SVGmHOpzeFG)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:xiaodu",
	});
}

export default Component;
