//=============================================================================
// MOG_ActorHud.js
//=============================================================================

/*:
 * @plugindesc (v1.9) Adiciona uma Hud com os parâmetros do personagem.
 * @author Moghunter
 *
 * @param Initial Visible
 * @desc Ativar a Hud no inicio do jogo.
 * @default true
 *
 * @param Hud X-Axis
 * @desc Definição da posição X-Axis da Hud.
 * @default 0
 *
 * @param Hud Y-Axis
 * @desc Definição da posição Y-Axis da Hud.
 * @default 440
 *
 * @param Smart Fade
 * @desc Ativa transparência na hud quando a hud estiver acima do personagem.
 * @default true
 *
 * @param Auto Fade
 * @desc Ativa transparência na hud quando a janela de messagem estiver ativada.
 * @default true
 *
 * @param >> FACE ===================
 * @desc 
 * @default  
 *
 * @param Face Visible
 * @desc Apresentar a imagem da face.
 * @default true
 *
 * @param Face X-Axis
 * @desc Definição da posição X-Axis da face.
 * @default 55
 *
 * @param Face Y-Axis
 * @desc Definição da posição Y-Axis da face.
 * @default 100
 *
 * @param Face Priority
 * @desc Prioridade da Face. (0 Low - 1 High)
 * @default 1
 *
 * @param >> NAME ===================
 * @desc 
 * @default
 *
 * @param Name Visible
 * @desc Apresentar o nome do personagem.
 * @default true
 *
 * @param Name X-Axis
 * @desc Definição da posição X-Axis do nome.
 * @default 5
 *
 * @param Name Y-Axis
 * @desc Definição da posição Y-Axis do nome.
 * @default 20 
 *
 * @param Name Font Size
 * @desc Definição do tamanho da fonte do nome.
 * @default 20
 *
 * @param Name Bold Size
 * @desc Definição do tamanho do contorno.
 * @default 4
 *
 * @param Name Font Italic
 * @desc Ativar fonte em itálico.
 * @default false
 *
 * @param >> HP ===================
 * @desc 
 * @default 
 *
 * @param HP Meter Visible
 * @desc Apresentar o medidor de HP
 * @default true   
 *
 * @param HP Meter X-Axis
 * @desc Definição da posição X-Axis do medidor de HP.
 * @default 143
 *
 * @param HP Meter Y-Axis
 * @desc Definição da posição Y-Axis do medidor de HP.
 * @default 85
 *
 * @param HP Meter Angle
 * @desc Ángulo do medidor.
 * @default 0 
 *
 * @param HP Meter Flow Anime
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default true
 *
 * @param HP Number Visible
 * @desc Apresentar o numero de HP
 * @default true
 *
 * @param HP Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Espquerda     1 - Centro       2 - Direita
 * @default 0
 *  
 * @param HP Number X-Axis
 * @desc Definição da posição X-Axis do numero de HP.
 * @default 270
 *
 * @param HP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de HP.
 * @default 70
 * 
 * @param MaxHP Number Visible
 * @desc Apresentar o numero de HP maximo.
 * @default false
 *
 * @param MaxHP Number X-Axis
 * @desc Definição da posição X-Axis do numero de HP maximo.
 * @default 185
 *
 * @param MaxHP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de HP maximo.
 * @default 40
 *
 * @param HP Icon Visible
 * @desc Apresentar o ícone de HP.
 * @default false
 *
 * @param HP Icon Half Mode
 * @desc Um ícone equivale a 2 pontos de HP.
 * @default false
 *
 * @param HP Icon Max Colors
 * @desc Quantidade de cores do ícone.
 * A imagem será dividida pelo número de cores.
 * @default 2
 *
 * @param HP Icon Max Rows
 * @desc Quantidade de ícones por linha.
 * @default 10
 *
 * @param HP Icon Max Columns
 * @desc Quantidade de linhas.
 * @default 2
 *
 * @param HP Icon X-Axis
 * @desc Quantidade X-Axis dos ícones.
 * @default 143
 *
 * @param HP Icon Y-Axis
 * @desc Quantidade Y-Axis dos ícones.
 * @default 85
 *
 * @param HP Icon Space X
 * @desc Definição do espaço entre os ícones na horizontal.
 * @default 0
 *
 * @param HP Icon Space Y
 * @desc Definição do espaço entre os ícones na vertical.
 * @default 0
 *
 * @param HP Icon Zoom Anime
 * @desc Ativar a animação de zoom no último ícone.
 * @default true
 *
 * @param >> MP ===================
 * @desc 
 * @default  
 *
 * @param MP Meter Visible
 * @desc Apresentar o medidor de MP
 * @default true   
 *
 * @param MP Meter X-Axis
 * @desc Definição da posição X-Axis do medidor de MP.
 * @default 160
 *
 * @param MP Meter Y-Axis
 * @desc Definição da posição Y-Axis do medidor de MP.
 * @default 115
 *
 * @param MP Meter Angle
 * @desc Ángulo do medidor.
 * @default 0
 *
 * @param MP Meter Flow Anime
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default true
 *
 * @param MP Number Visible
 * @desc Apresentar o numero de MP
 * @default true
 *
 * @param MP Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Espquerda     1 - Centro       2 - Direita
 * @default 0
 *  
 * @param MP Number X-Axis
 * @desc Definição da posição X-Axis do numero de MP.
 * @default 287
 *
 * @param MP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de MP.
 * @default 100
 *
 * @param MaxMP Number Visible
 * @desc Apresentar o numero de MP maximo.
 * @default false
 *
 * @param MaxMP Number X-Axis
 * @desc Definição da posição X-Axis do numero de MP maximo.
 * @default 196
 *
 * @param MaxMP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de MP maximo.
 * @default 78
 *
 * @param MP Icon Visible
 * @desc Apresentar o ícone de MP.
 * @default false
 *
 * @param MP Icon Half Mode
 * @desc Um ícone equivale a 2 pontos de MP.
 * @default false 
 * 
 * @param MP Icon Max Colors
 * @desc Quantidade de cores do ícone.
 * A imagem será dividida pelo número de cores.
 * @default 2
 *
 * @param MP Icon Max Rows
 * @desc Quantidade de ícones por linha.
 * @default 10
 *
 * @param MP Icon Max Columns
 * @desc Quantidade de linhas.
 * @default 2
 *
 * @param MP Icon X-Axis
 * @desc Quantidade X-Axis dos ícones.
 * @default 143
 *
 * @param MP Icon Y-Axis
 * @desc Quantidade Y-Axis dos ícones.
 * @default 120
 *
 * @param MP Icon Space X
 * @desc Definição do espaço entre os ícones na horizontal.
 * @default 0
 *
 * @param MP Icon Space Y
 * @desc Definição do espaço entre os ícones na vertical.
 * @default 0
 *
 * @param MP Icon Zoom Anime
 * @desc Ativar a animação de zoom no último ícone.
 * @default true
 * 
 * @param >> TP ===================
 * @desc 
 * @default  
 *
 * @param TP Meter Visible
 * @desc Apresentar o medidor de TP
 * @default true   
 *
 * @param TP Meter X-Axis
 * @desc Definição da posição X-Axis do medidor de TP.
 * @default 143
 *
 * @param TP Meter Y-Axis
 * @desc Definição da posição Y-Axis do medidor de TP.
 * @default 145
 *
 * @param TP Meter Angle
 * @desc Ángulo do medidor.
 * @default 0
 *
 * @param TP Meter Flow Anime
 * @desc Ativar animação de gradiente no medidor.
 * É necessário que a imagem tenha 3x a largura do medidor.
 * @default true
 *
 * @param TP Number Visible
 * @desc Apresentar o numero de TP.
 * @default true   
 *
 * @param TP Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Espquerda     1 - Centro       2 - Direita
 * @default 0
 *
 * @param TP Number X-Axis
 * @desc Definição da posição X-Axis do numero de TP.
 * @default 270
 *
 * @param TP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de TP.
 * @default 130
 *
 * @param MaxTP Number Visible
 * @desc Apresentar o numero de TP maximo.
 * @default false
 *
 * @param MaxTP Number X-Axis
 * @desc Definição da posição X-Axis do numero de TP maximo.
 * @default 185
 *
 * @param MaxTP Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de TP maximo.
 * @default 116
 *
 * @param TP Icon Visible
 * @desc Apresentar o ícone de TP.
 * @default false
 *
 * @param TP Icon Half Mode
 * @desc Um ícone equivale a 2 pontos de TP.
 * @default false
 * 
 * @param TP Icon Max Colors
 * @desc Quantidade de cores do ícone.
 * A imagem será dividida pelo número de cores.
 * @default 2
 *
 * @param TP Icon Max Rows
 * @desc Quantidade de ícones por linha.
 * @default 10
 *
 * @param TP Icon Max Columns
 * @desc Quantidade de linhas.
 * @default 2
 *
 * @param TP Icon X-Axis
 * @desc Quantidade X-Axis dos ícones.
 * @default 143
 *
 * @param TP Icon Y-Axis
 * @desc Quantidade Y-Axis dos ícones.
 * @default 50
 *
 * @param TP Icon Space X
 * @desc Definição do espaço entre os ícones na horizontal.
 * @default 0
 *
 * @param TP Icon Space Y
 * @desc Definição do espaço entre os ícones na vertical.
 * @default 0
 *
 * @param TP Icon Zoom Anime
 * @desc Ativar a animação de zoom no último ícone.
 * @default true
 * 
 * @param >> EXP ===================
 * @desc 
 * @default  
 *
 * @param EXP Meter Visible
 * @desc Apresentar o medidor de EXP
 * @default true   
 *
 * @param EXP Meter X-Axis
 * @desc Definição da posição X-Axis do medidor de EXP.
 * @default 127
 *
 * @param EXP Meter Y-Axis
 * @desc Definição da posição Y-Axis do medidor de EXP.
 * @default 173
 *
 * @param EXP Meter Angle
 * @desc Ángulo do medidor.
 * @default 0
 *
 * @param Level Number Visible
 * @desc Apresentar o numero de Level.
 * @default true   
 *
 * @param Level Number Align
 * @desc Definição do alinhamento dos números.
 * 0 - Espquerda     1 - Centro       2 - Direita
 * @default 1
 * 
 * @param Level Number X-Axis
 * @desc Definição da posição X-Axis do numero de Level.
 * @default 65
 *
 * @param Level Number Y-Axis
 * @desc Definição da posição Y-Axis do numero de Level.
 * @default 153
 *
 * @param >> STATES ===================
 * @desc 
 * @default 
 *
 * @param States Visible
 * @desc Apresentar o numero as condições.
 * @default true   
 *
 * @param States X-Axis
 * @desc Definição da posição X-Axis das condições.
 * @default 5
 *
 * @param States Y-Axis
 * @desc Definição da posição Y-Axis das condições.
 * @default 64
 *
 * @help  
 * =============================================================================
 * +++ MOG Actor Hud (v1.9) +++
 * By Moghunter 
 * https://atelierrgss.wordpress.com/
 * =============================================================================
 * Adiciona uma Hud com os parâmetros do personagem.
 * Serão necessários os arquivos. (img/actorhud/)
 *
 * HP_Meter.png
 * HP_Number.png
 * MP_Meter.png
 * MP_Number.png
 * TP_Meter.png
 * TP_Number.png
 * Layout.png
 * LV_Number.png
 * EXP_Meter.png
 *
 * =============================================================================
 * Para nomear as faces dos battlers basta nomear da seguinte forma.
 *
 * Face_ + ACTOR_ID.png
 *
 * Ex
 *
 * Face_1.png
 * Face_2.png
 * Face_3.png
 *
 * =============================================================================
 * Para ocultar ou apresentar a hud use os códigos abaixo através do
 * PLUGIN COMMAND
 *
 * hide_actor_hud
 * show_actor_hud
 * 
 * ============================================================================
 * HISTÓRICO
 * ============================================================================
 * (v1.9) - Melhoria no sistema de ícones de múltiplas cores. 
 *        - Melhoria na compatibilidade com RM v1.50+
 * (v1.8) - Correção do glitch de fazer a hud piscar após acessar o menu.
 *        - Melhoria na compatibilidade de plugins.
 * (v1.7) - Adição do medidor em ícones.
 *        - Melhoria na definição do ángulo do medidor.
 *        - Correção na apresentação do valor de TP máximo.
 *        - Correção na valor do medidor de dano ao aumentar o nível.
 * (v1.6) - Compatibilidade com Chrono Engine.
 * (v1.5) - Correção do glitch de piscar a hud. 
 *        - Melhoria na apresentação das condições.
 * (v1.4) - Correção do crash quando o states está em false.
 * (v1.3) - Adição de ocultar a hud no inicio do jogo.
 * (v1.2) - Correção do setup da posição do numero de HP. 
 * (v1.1) - Correção de piscar a hud no modo ocultar a hud.
 *        
 */
 
//=============================================================================
// ** PLUGIN PARAMETERS
//=============================================================================
　　var Imported = Imported || {};
　　Imported.MOG_ActorHud = true;
　　var Moghunter = Moghunter || {}; 

  　Moghunter.parameters = PluginManager.parameters('MOG_ActorHud');
   
    // HUD POSITION
	Moghunter.ahud_pos_x = Number(Moghunter.parameters['Hud X-Axis'] || 0);
	Moghunter.ahud_pos_y = Number(Moghunter.parameters['Hud Y-Axis'] || 440);
	Moghunter.ahud_fade_limit = Number(Moghunter.parameters['Fade Max'] || 90);
	
	// FACE POSITION
	Moghunter.ahud_face_visible = String(Moghunter.parameters['Face Visible'] || true);
	Moghunter.ahud_face_shake = String(Moghunter.parameters['Face Shake Animation'] || true);
	Moghunter.ahud_face_zoom = String(Moghunter.parameters['Face Zoom Animation'] || true);
	Moghunter.ahud_face_animated = String(Moghunter.parameters['Face Frame Animation'] || false);
	Moghunter.ahud_face_pos_x = Number(Moghunter.parameters['Face X-Axis'] || 55);
	Moghunter.ahud_face_pos_y = Number(Moghunter.parameters['Face Y-Axis'] || 100);
	Moghunter.ahud_face_priority = Number(Moghunter.parameters['Face Priority'] || 1);
	
	// NAME POSITION
	Moghunter.ahud_name_visible = String(Moghunter.parameters['Name Visible'] || true);
	Moghunter.ahud_name_font_size = Number(Moghunter.parameters['Name Font Size'] || 20);
	Moghunter.ahud_name_font_bold_size = Number(Moghunter.parameters['Name Bold Size'] || 4);
	Moghunter.ahud_name_font_italic = String(Moghunter.parameters['Name Font Italic'] || false);	
	Moghunter.ahud_name_pos_x = Number(Moghunter.parameters['Name X-Axis'] || 5);
	Moghunter.ahud_name_pos_y = Number(Moghunter.parameters['Name Y-Axis'] || 20);	
	
	// HP ICON POSITION
	Moghunter.ahud_hp_icon_visible = String(Moghunter.parameters['HP Icon Visible'] || 'false');
	Moghunter.ahud_hp_icon_halfMode = String(Moghunter.parameters['HP Icon Half Mode'] || 'false');	
	Moghunter.ahud_hp_icon_colorMax = Number(Moghunter.parameters['HP Icon Max Colors'] || 2);	 
	Moghunter.ahud_hp_icon_rows = Number(Moghunter.parameters['HP Icon Max Rows'] || 10);
	Moghunter.ahud_hp_icon_cols = Number(Moghunter.parameters['HP Icon Max Columns'] || 2);	
	Moghunter.ahud_hp_icon_pos_x = Number(Moghunter.parameters['HP Icon X-Axis'] || 143);
	Moghunter.ahud_hp_icon_pos_y = Number(Moghunter.parameters['HP Icon Y-Axis'] || 85);	
	Moghunter.ahud_hp_icon_space_x = Number(Moghunter.parameters['HP Icon Space X'] || 0);
	Moghunter.ahud_hp_icon_space_y = Number(Moghunter.parameters['HP Icon Space Y'] || 0);	
	Moghunter.ahud_hp_icon_zoomAnime = String(Moghunter.parameters['HP Icon Zoom Anime'] || 'true');	
	
	// MP ICON POSITION
	Moghunter.ahud_mp_icon_visible = String(Moghunter.parameters['MP Icon Visible'] || 'false');
	Moghunter.ahud_mp_icon_halfMode = String(Moghunter.parameters['MP Icon Half Mode'] || 'false');	
	Moghunter.ahud_mp_icon_colorMax = Number(Moghunter.parameters['MP Icon Max Colors'] || 2);	 
	Moghunter.ahud_mp_icon_rows = Number(Moghunter.parameters['MP Icon Max Rows'] || 10);
	Moghunter.ahud_mp_icon_cols = Number(Moghunter.parameters['MP Icon Max Columns'] || 2);	
	Moghunter.ahud_mp_icon_pos_x = Number(Moghunter.parameters['MP Icon X-Axis'] || 143);
	Moghunter.ahud_mp_icon_pos_y = Number(Moghunter.parameters['MP Icon Y-Axis'] || 125);	
	Moghunter.ahud_mp_icon_space_x = Number(Moghunter.parameters['MP Icon Space X'] || 0);
	Moghunter.ahud_mp_icon_space_y = Number(Moghunter.parameters['MP Icon Space Y'] || 0);	
	Moghunter.ahud_mp_icon_zoomAnime = String(Moghunter.parameters['MP Icon Zoom Anime'] || 'true');	

	// TP ICON POSITION
	Moghunter.ahud_tp_icon_visible = String(Moghunter.parameters['TP Icon Visible'] || 'false');
	Moghunter.ahud_tp_icon_halfMode = String(Moghunter.parameters['TP Icon Half Mode'] || 'false');	
	Moghunter.ahud_tp_icon_colorMax = Number(Moghunter.parameters['TP Icon Max Colors'] || 2);	 
	Moghunter.ahud_tp_icon_rows = Number(Moghunter.parameters['TP Icon Max Rows'] || 10);
	Moghunter.ahud_tp_icon_cols = Number(Moghunter.parameters['TP Icon Max Columns'] || 2);	
	Moghunter.ahud_tp_icon_pos_x = Number(Moghunter.parameters['TP Icon X-Axis'] || 143);
	Moghunter.ahud_tp_icon_pos_y = Number(Moghunter.parameters['TP Icon Y-Axis'] || 50);	
	Moghunter.ahud_tp_icon_space_x = Number(Moghunter.parameters['TP Icon Space X'] || 0);
	Moghunter.ahud_tp_icon_space_y = Number(Moghunter.parameters['TP Icon Space Y'] || 0);	
	Moghunter.ahud_tp_icon_zoomAnime = String(Moghunter.parameters['TP Icon Zoom Anime'] || 'true');	
	
	// HP METER POSITION
	Moghunter.ahud_hp_meter_visible = String(Moghunter.parameters['HP Meter Visible'] || true);
	Moghunter.ahud_hp_meter_pos_x = Number(Moghunter.parameters['HP Meter X-Axis'] || 143);
	Moghunter.ahud_hp_meter_pos_y = Number(Moghunter.parameters['HP Meter Y-Axis'] || 85);
	Moghunter.ahud_hp_meter_rotation = Number(Moghunter.parameters['HP Meter Angle'] || 0);
	Moghunter.ahud_hp_meter_flow = String(Moghunter.parameters['HP Meter Flow Anime'] || true);
	
	// HP NUMBER POSITION
	Moghunter.ahud_hp_number_visible  = String(Moghunter.parameters['HP Number Visible'] || true);
	Moghunter.ahud_hp_number_align  = Number(Moghunter.parameters['HP Number Align'] || 0);
	Moghunter.ahud_hp_number_pos_x  = Number(Moghunter.parameters['HP Number X-Axis'] || 270);
	Moghunter.ahud_hp_number_pos_y  = Number(Moghunter.parameters['HP Number Y-Axis'] || 70);
	Moghunter.ahud_maxhp_number_visible  = String(Moghunter.parameters['MaxHP Number Visible'] || false);
	Moghunter.ahud_maxhp_number_pos_x  = Number(Moghunter.parameters['MaxHP Number X-Axis'] || 185);
	Moghunter.ahud_maxhp_number_pos_y  = Number(Moghunter.parameters['MaxHP Number Y-Axis'] || 40);	

	// MP METER POSITION
	Moghunter.ahud_mp_meter_visible = String(Moghunter.parameters['MP Meter Visible'] || true);
	Moghunter.ahud_mp_meter_pos_x = Number(Moghunter.parameters['MP Meter X-Axis'] || 160);
	Moghunter.ahud_mp_meter_pos_y = Number(Moghunter.parameters['MP Meter Y-Axis'] || 115);	
	Moghunter.ahud_mp_meter_rotation = Number(Moghunter.parameters['MP Meter Angle'] || 0);
	Moghunter.ahud_mp_meter_flow = String(Moghunter.parameters['MP Meter Flow Anime'] || true);
	
	// MP NUMBER POSITION
	Moghunter.ahud_mp_number_visible  = String(Moghunter.parameters['MP Number Visible'] || true);
    Moghunter.ahud_mp_number_align  = Number(Moghunter.parameters['MP Number Align'] || 0);	
	Moghunter.ahud_mp_number_pos_x  = Number(Moghunter.parameters['MP Number X-Axis'] || 287);
	Moghunter.ahud_mp_number_pos_y  = Number(Moghunter.parameters['MP Number Y-Axis'] || 100);
	Moghunter.ahud_maxmp_number_visible  = String(Moghunter.parameters['MaxMP Number Visible'] || false);
	Moghunter.ahud_maxmp_number_pos_x  = Number(Moghunter.parameters['MaxMP Number X-Axis'] || 196);
	Moghunter.ahud_maxmp_number_pos_y  = Number(Moghunter.parameters['MaxMP Number Y-Axis'] || 78);	

	// TP METER POSITION
	Moghunter.ahud_tp_meter_visible = String(Moghunter.parameters['TP Meter Visible'] || true);
	Moghunter.ahud_tp_meter_pos_x = Number(Moghunter.parameters['TP Meter X-Axis'] || 143);
	Moghunter.ahud_tp_meter_pos_y = Number(Moghunter.parameters['TP Meter Y-Axis'] || 145);	
	Moghunter.ahud_tp_meter_rotation = Number(Moghunter.parameters['TP Meter Angle'] || 0);
	Moghunter.ahud_tp_meter_flow = String(Moghunter.parameters['TP Meter Flow Anime'] || false);
	
	// TP NUMBER POSITION
	Moghunter.ahud_tp_number_visible  = String(Moghunter.parameters['TP Number Visible'] || true);
	Moghunter.ahud_tp_number_align  = Number(Moghunter.parameters['TP Number Align'] || 0);	
	Moghunter.ahud_tp_number_pos_x  = Number(Moghunter.parameters['TP Number X-Axis'] || 270);
	Moghunter.ahud_tp_number_pos_y  = Number(Moghunter.parameters['TP Number Y-Axis'] || 130);
	Moghunter.ahud_maxtp_number_visible  = String(Moghunter.parameters['MaxTP Number Visible'] || false);
	Moghunter.ahud_maxtp_number_pos_x  = Number(Moghunter.parameters['MaxTP Number X-Axis'] || 185);
	Moghunter.ahud_maxtp_number_pos_y  = Number(Moghunter.parameters['MaxTP Number Y-Axis'] || 116);	

	// Level NUMBER POSITION
	Moghunter.ahud_level_number_visible  = String(Moghunter.parameters['Level Number Visible'] || true);
	Moghunter.ahud_level_number_align  = Number(Moghunter.parameters['Level Number Align'] || 1);	
	Moghunter.ahud_level_number_pos_x  = Number(Moghunter.parameters['Level Number X-Axis'] || 65);
	Moghunter.ahud_level_number_pos_y  = Number(Moghunter.parameters['Level Number Y-Axis'] || 153);

    // EXP METER POSITION
	Moghunter.ahud_exp_meter_visible = String(Moghunter.parameters['EXP Meter Visible'] || true);
	Moghunter.ahud_exp_meter_pos_x = Number(Moghunter.parameters['EXP Meter X-Axis'] || 127);
	Moghunter.ahud_exp_meter_pos_y = Number(Moghunter.parameters['EXP Meter Y-Axis'] || 173);	
	Moghunter.ahud_exp_meter_rotation = Number(Moghunter.parameters['EXP Meter Angle'] || 0);
	
	// STATES POSITION
	Moghunter.ahud_states_visible = String(Moghunter.parameters['States Visible'] || true);
	Moghunter.ahud_states_pos_x = Number(Moghunter.parameters['States X-Axis'] || 5);
	Moghunter.ahud_states_pos_y = Number(Moghunter.parameters['States Y-Axis'] || 64);	

    Moghunter.ahud_hudvisible = String(Moghunter.parameters['Initial Visible'] || "false");	
    Moghunter.ahud_smartFade = String(Moghunter.parameters['Smart Fade'] || "true");	
	Moghunter.ahud_autoFade = String(Moghunter.parameters['Auto Fade'] || "true");
		
//=============================================================================
// ** ImageManager
//=============================================================================

//==============================
// * Actor Hud
//==============================
ImageManager.loadAHud = function(filename) {
    return this.loadBitmap('img/actorhud/', filename, 0, true);
};			

//=============================================================================
// ** Game_System
//=============================================================================

//==============================
// * Initialize
//==============================
var _alias_mog_ahud_sys_initialize = Game_System.prototype.initialize;
Game_System.prototype.initialize = function() {
	_alias_mog_ahud_sys_initialize.call(this);
	this._ahud_position = [0,0];
	this._ahud_visible = String(Moghunter.ahud_hudvisible) === "true" ? true : false;
	this._ahud_smartFade = String(Moghunter.ahud_smartFade) === "true" ? true : false;
	this._ahud_autoFade = String(Moghunter.ahud_autoFade) === "true" ? true : false;
	this._ahud_opacity = 0;
	this._iconWeatherToShow = "";
};

//=============================================================================
// ** Game BattlerBase
//=============================================================================


//=============================================================================
// ** Game Actor
//=============================================================================

//==============================
// * Current EXP R
//==============================
Game_Actor.prototype.current_exp_r = function() {
    return this.nextLevelExp() - this.nextRequiredExp() - this.expForLevel(this._level);
};

//==============================
// * Next Level EXP R
//==============================
Game_Actor.prototype.nextLevelExp_r = function() {
    return this.expForLevel(this._level + 1) - this.expForLevel(this._level) ;
};

Game_Party.prototype.getGold = function() {
	return this.gold();
}

//=============================================================================
// ** Game Character Base 
//=============================================================================

//==============================
// * Screen RealX
//==============================
Game_CharacterBase.prototype.screen_realX = function() {
    return this.scrolledX() * $gameMap.tileWidth();
};

//==============================
// * Screen RealY
//==============================
Game_CharacterBase.prototype.screen_realY = function() {
    return this.scrolledY() * $gameMap.tileHeight();
};

//=============================================================================
// ** Game_Interpreter
//=============================================================================	

//==============================
// * PluginCommand
//==============================
var _alias_mog_actorhud_pluginCommand = Game_Interpreter.prototype.pluginCommand
Game_Interpreter.prototype.pluginCommand = function(command, args) {
	_alias_mog_actorhud_pluginCommand.call(this,command, args)
	if (command === "show_actor_hud")  { $gameSystem._ahud_visible = true};
	if (command === "hide_actor_hud")  { $gameSystem._ahud_visible = false;};
	return true;
};

//=============================================================================
// ** Scene Base
//=============================================================================

//==============================
// ** create Hud Field
//==============================
Scene_Base.prototype.createHudField = function() {
	this._hudField = new Sprite();
	this._hudField.z = 10;
	this.addChild(this._hudField);
};

//=============================================================================
// ** Scene Map
//=============================================================================

//==============================
// ** create Spriteset
//==============================
var _mog_actorHud_sMap_createSpriteset = Scene_Map.prototype.createSpriteset;
Scene_Map.prototype.createSpriteset = function() {
	_mog_actorHud_sMap_createSpriteset.call(this);
	if (!this._hudField) {this.createHudField()};
	this.createActorHud();
};

//==============================
// * Create Actor Hud
//==============================
Scene_Map.prototype.createActorHud = function() {
	this._actorHud = new Actor_Hud();
	this._actorHud.mz = 101;
	this._hudField.addChild(this._actorHud);	
};

//=============================================================================
// * Actor_Hud
//=============================================================================
function Actor_Hud() {
    this.initialize.apply(this, arguments);
};

Actor_Hud.prototype = Object.create(Sprite.prototype);
Actor_Hud.prototype.constructor = Actor_Hud;

//==============================
// * Initialize
//==============================
Actor_Hud.prototype.initialize = function(hud_id) {
    Sprite.prototype.initialize.call(this);
	this.visible = false;	
    this._data_initial_ref = [0,true];
	this._hud_id = hud_id;
	this._hud_size = [-1,-1,-1,-1];
    this.base_parameter_clear();
    this.load_img();
	if (!$gameSystem._ahud_visible) {this.opacity = 0};
	this.update();
};

//==============================
// * Load Img
//==============================
Actor_Hud.prototype.load_img = function() {
	this._layout_img = ImageManager.loadAHud("");
	this._state_img = ImageManager.loadSystem("IconSet");
	if (String(Moghunter.ahud_hp_meter_visible) == "true") {this._hp_meter_img = ImageManager.loadAHud("HP_Meter")};
	if (String(Moghunter.ahud_mp_meter_visible) == "true") {this._mp_meter_img = ImageManager.loadAHud("MP_Meter")};
	if (String(Moghunter.ahud_tp_meter_visible) == "true") {this._tp_meter_img = ImageManager.loadAHud("TP_Meter")};	
	if (String(Moghunter.ahud_hp_icon_visible) == "true") {this._hp_icon_img = ImageManager.loadAHud("HP_Icon")};
	if (String(Moghunter.ahud_mp_icon_visible) == "true") {this._mp_icon_img = ImageManager.loadAHud("MP_Icon")};
	if (String(Moghunter.ahud_tp_icon_visible) == "true") {this._tp_icon_img = ImageManager.loadAHud("TP_Icon")};	
	if (String(Moghunter.ahud_exp_meter_visible) == "true") {this._exp_meter_img = ImageManager.loadAHud("EXP_Meter")};
	if (String(Moghunter.ahud_hp_number_visible) == "true") {this._hp_number_img = ImageManager.loadAHud("HP_Number")};
	if (String(Moghunter.ahud_mp_number_visible) == "true") {this._mp_number_img = ImageManager.loadAHud("MP_Number")};
	if (String(Moghunter.ahud_tp_number_visible) == "true") {this._tp_number_img = ImageManager.loadAHud("TP_Number")};
	if (String(Moghunter.ahud_level_number_visible) == "true") {this._level_number_img = ImageManager.loadAHud("LV_Number")};
	if (String(Moghunter.ahud_maxhp_number_visible) == "true") {this._maxhp_number_img = ImageManager.loadAHud("HP_Number2")};
	if (String(Moghunter.ahud_maxmp_number_visible) == "true") {this._maxmp_number_img = ImageManager.loadAHud("MP_Number2")};
	if (String(Moghunter.ahud_maxtp_number_visible) == "true") {this._maxtp_number_img = ImageManager.loadAHud("TP_Number2")};
	this._exp_meterbar_img = ImageManager.loadAHud("Contour_xp");
};

//==============================
// * Base Parameter Clear
//==============================
Actor_Hud.prototype.base_parameter_clear = function() {
 	 this._hp_old = [-1,-1];
	 this._maxhp_old = [-1,-1];
	 this._hp_old_ani = [-1,-1];
	 this._hp_flow = [false,0,0,0];
     this._mp_old = [-1,-1];
	 this._maxmp_old = [-1,-1];
	 this._mp_old_ani = [-1,-1];
	 this._mp_flow = [false,0,0,0];
	 this._tp_old = [-1,-1];
	 this._maxtp_old = [-1,-1];
	 this._tp_old_ani = -1;
	 this._tp_flow = [false,0,0,0];
	 this._exp_old = [-1,-1];
	 this._exp_flow = [false,0,0,0];
	 this._gold_old= [-1,-1];
	 this._hp_number_old = -1;
	 this._mp_number_old = -1;
	 this._hp_number_old = -1;	 
	 this._hp_icon_old = [-1,-1];
	 this._mp_icon_old = [-1,-1];
	 this._tp_icon_old = [-1,-1];
	 this._hp_img_data = [0,0,0];
	 this._mp_img_data = [0,0,0];
	 this._tp_img_data = [0,0,0];
	 this._states_old = [];
	 this._states_data = [0,0,0];
	 this._active = false;
	 this._hud_size = [0,0];
	 this._old_role = [-1,-1];
	 this._old_time = "";
	 this._old_job = "";
	 this._old_caracname = "";
	 this._old_carx = 0;
	 this._old_cary = 0;
	 this._old_weather = "";
};

//==============================
// * Need Refresh Bhud
//==============================
Actor_Hud.prototype.need_refreh_bhud = function() {
	if (this._data_initial_ref[1]) {return true};
	if (this._battler != $gameParty.members()[0]) {return true};
	return false;
};

//==============================
// * Refresh Bhud
//==============================
Actor_Hud.prototype.refresh_bhud = function() {
	 this._data_initial_ref[1] = false;
	 this._battler = $gameParty.members()[0];
	 this._hud_size = [0,0];
	 this.base_parameter_clear();
};

//==============================
// * Refresh Position
//==============================
Actor_Hud.prototype.refresh_position = function() {
	 this.set_hud_position();	 
	 this.visible = true;     
	 this.create_sprites();
};

//==============================
// * Set Hud Position
//==============================
Actor_Hud.prototype.set_hud_position = function() {
     this._hud_size[0] = Moghunter.ahud_pos_x - ($gameMap.tileWidth() / 2);
     this._hud_size[1] = Moghunter.ahud_pos_y - ($gameMap.tileHeight() / 2);
     this._hud_size[2] = Moghunter.ahud_pos_x - $gameMap.tileWidth();
     this._hud_size[3] = Moghunter.ahud_pos_y ;	 
	 this._pos_x = Moghunter.ahud_pos_x;
	 this._pos_y = Moghunter.ahud_pos_y;
};

//==============================
// * Update
//==============================
Actor_Hud.prototype.update = function() {
    Sprite.prototype.update.call(this);	
	if (this.need_refreh_bhud()) {this.refresh_bhud()};
    if (!this._battler) {this.visible = false;return};
	if (!this._layout_img.isReady()) {return};
	if (this._hud_size[0] === 0) {this.refresh_position();return};
	this.update_sprites();
};

//==============================
// * Create Base Sprites
//==============================


//==============================
// * Create Sprites
//==============================
Actor_Hud.prototype.create_sprites = function() {
	this.create_face();
	this.create_contour_exp();
	this.create_contour_hp();
	this.create_contour_mp();
	this.create_contour_tp();
	this.create_hp_meter();
	this.create_mp_meter();
    this.create_tp_meter();
	this.create_exp_meter();
    this.create_states();	
	this.create_name();
	this.create_hptext();
	this.create_mptext();
	this.create_tptext();
	this.create_goldtext();
	this.create_xptext();
    this.create_Timetext();
	this.create_Jobtext();
	this.create_Caracnametext();
	this.create_iconMeteo();
};

//==============================
// * Update Sprites
//==============================
Actor_Hud.prototype.update_sprites = function() {	
	this.update_visible();
	this.update_face();	
    this.update_hp();
	this.update_mp();
    this.update_tp();
    this.update_states();
	this.update_exp();
	this.update_gold();
	this.update_Timetext();
	this.update_Jobtext();
	this.update_Caracnametext();
	this.update_iconMeteo();
};

//==============================
// * Need Hide
//==============================
Actor_Hud.prototype.needHide = function(start) {
	if (Imported.MOG_ChronoEngine && $gameSystem.isChronoMode()) {return true};
    if (!this._battler) {return true};	
	if (!$gameSystem._ahud_visible) {return true};
	if (!$gameSystem._ahud_autoFade) {return false};
	if ($gameMessage.isBusy()) {return true};
	return false
};

//==============================
// * Update visible
//==============================
Actor_Hud.prototype.update_visible = function() {
	 this.visible = true;
     if (this.needHide(false)) {
		 this.opacity -= 15;
	 } else {		 	
		if (this.needFade()) {
			if (this.opacity > Moghunter.ahud_fade_limit) {
				this.opacity -= 10;
				if (this.opacity < Moghunter.ahud_fade_limit) {this.opacity = Moghunter.ahud_fade_limit};
			 };
		} else {
				 this.opacity += 10;
		};		
	 };
	 $gameSystem._ahud_opacity = this.opacity;
};

//==============================
// * Need Fade
//==============================
Actor_Hud.prototype.needFade = function() {
    if (this._hud_size[0] === -1) {return false};
	if (!this._battler) {return false};
	if (!$gameSystem._ahud_smartFade) {return false};
	if ($gamePlayer.screen_realX() < this._hud_size[0]) {return false};
	if ($gamePlayer.screen_realX() > this._hud_size[2]) {return false};
	if ($gamePlayer.screen_realY() < this._hud_size[1]) {return false};
	if ($gamePlayer.screen_realY() > this._hud_size[3]) {return false};	
    return true;
};


//==============================
// * Update Dif
//==============================
Actor_Hud.prototype.update_dif = function(value,real_value,speed) {
	if (value == real_value) {return value};
	var dnspeed = 20 + (Math.abs(value - real_value) / speed);
	if (value > real_value) {value -= dnspeed;
	    if (value < real_value) {value = real_value};}
    else if (value < real_value) {value  += dnspeed;
    	if (value  > real_value) {value  = real_value};		
    };
	return Math.floor(value);
};

//==============================
// * Refresh Meter
//==============================
Actor_Hud.prototype.refresh_meter = function(sprite,value,value_max,type,div) {
	var ch = sprite.bitmap.height / div;
    var meter_rate = sprite.bitmap.width * value / value_max;
	sprite.setFrame(0,type * ch, meter_rate, ch);
};

//==============================
// * Refresh Flow
//==============================
Actor_Hud.prototype.refresh_meter_flow = function(sprite,value,value_max,type,flow) {
	var cw = sprite.bitmap.width / 3;
	var ch = sprite.bitmap.height / 2;
    var meter_rate = cw * value / value_max;
	sprite.setFrame(flow,type * ch, meter_rate, ch);
};

//==============================
// * Refresh Number
//==============================
Actor_Hud.prototype.refresh_number = function(sprites,value,img_data,x,center) {
    numbers = Math.abs(value).toString().split("");  
   	for (var i = 0; i < sprites.length ; i++) {sprites[i].visible = false;
	   if (i > numbers.length) {return};
	   var n = Number(numbers[i]);
	   sprites[i].setFrame(n * img_data[2], 0, img_data[2], img_data[1]);
	   sprites[i].visible = true;
	   var nx = -(img_data[2] * i) + (img_data[2] * numbers.length);
	   if (sprites.align === 1) {
	      var xi = (img_data[2] * numbers.length) / 2;		   
		   sprites[i].x = x + xi - nx;
       } else if (sprites.align === 2) {
	       var xi = img_data[2] * numbers.length;		   
		   sprites[i].x = x + xi - nx;
   	   } else {
		   sprites[i].x = x - nx;
	   }; 
    };
};

//==============================
// * Need Refresh Parameter
//==============================
Actor_Hud.prototype.need_refresh_parameter = function(parameter) {
  switch (parameter) {
  	case 0:
         if (this._hp_old[0] != this._battler.hp) {return true};
		 if (this._hp_old[1] != this._battler.mhp) {return true};
         break;
  	case 1:
         if (this._mp_old[0] != this._battler.mp) {return true};
		 if (this._mp_old[1] != this._battler.mmp) {return true};
         break;			
  	case 2:
         if (this._tp_old[0] != this._battler.tp) {return true};		 
		 if (this._tp_old[1] != this._battler.maxTp()) {return true};
         break;	
  	case 3:
         if (this._exp_old != this._battler.currentExp()) {return true};
         break;	
	case 4:
		if (this._gold_old != $gameParty.gold()) {return true};
		break;	
	case 5:
		if (this._old_role != this._battler._classId){return true};
		break;	
	case 6:
		if (this._old_time != ($gameVariables.value(3)+"/"+$gameVariables.value(5)+"/"+$gameVariables.value(6)+" "+$gameVariables.value(2)+":"+$gameVariables.value(1))){return true};
		break;	 	
	case 7:
		if (this._old_job != this._battler._className){return true};
		break;		
	case 8:
		if (this._old_caracname != this._battler._name){return true};
		break;
	case 9:
		if (this._old_carx != $gamePlayer._realX){return true};
		break;
	case 10:
		if (this._old_cary != $gamePlayer._realY){return true};
		break;
	case 11:
		if (this._old_weather != $gameVariables.value(25) ){return true};
		break;
  };
  return false;
};

	
//==============================
// * Create Face
//==============================
Actor_Hud.prototype.create_face = function() {
	this.removeChild(this._face);
	if (!this._battler) {return};	
	this._face = new Sprite(ImageManager.loadAHud(this._battler._classId));
	this._face_data = [0,0,false,false,false,-1];
	this._battler._ahud_face_data = [0,0,0,0]
	this.addChild(this._face);
	this._face.move(20,10);
};

//==============================
// * Update Face
//==============================
Actor_Hud.prototype.update_face = function() {
	if (!this._face) {return};
	if (!this._face.bitmap.isReady()) {return};
	if (this._face_data[4] && this._face_data[5] != this._battler._ahud_face_data[2]) {this.refresh_face();};
	if (this.need_refresh_parameter(5)) {
		this._old_role = this._battler._classId;
		this.refresh_face();
		this.refresh_Jobtext();
	};

};

//==============================
// * Refresh Face
//==============================
Actor_Hud.prototype.refresh_face = function() {
	this._face_data[5] = this._battler._ahud_face_data[2];
	var cw = this._face.bitmap.width;
	var ch = this._face.bitmap.height;
	this._face.setFrame(cw * this._face_data[5], 0, cw, ch);
	this.create_face()
};

//==============================
// * Create Name
//==============================
Actor_Hud.prototype.create_name = function() {
	this.removeChild(this._name);
	if (!this._battler) {return};	
	this._name = new Sprite(new Bitmap(300,48));
	this._name.x = 85;
	this._name.y = 0;
	this._name.bitmap.fontSize = Number(Moghunter.ahud_name_font_size);
	if (String(Moghunter.ahud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._name.bitmap.outlineWidth = Number(Moghunter.ahud_name_font_bold_size);
	this.addChild(this._name);	
	this.refresh_name();
};

Actor_Hud.prototype.create_Caracnametext = function() {
	this.removeChild(this._caracname);
	if (!this._battler) {return};	
	this._caracname = new Sprite(new Bitmap(300,14));
	this._caracname.x = $gamePlayer.screen_realX()-126;
	this._caracname.y = $gamePlayer.screen_realY()-35;
	this._caracname.bitmap.fontSize = 14;
	if (String(Moghunter.ahud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._caracname.bitmap.outlineWidth = Number(Moghunter.ahud_name_font_bold_size);
	this.addChild(this._caracname);	
	this.refresh_Caracnametext();
};
Actor_Hud.prototype.refresh_Caracnametext = function() {
	this._caracname.bitmap.clear();
	this._caracname.bitmap.drawText(this._battler._name, 0, 0,this._caracname.bitmap.width , this._caracname.bitmap.height,'center');
};
Actor_Hud.prototype.update_Caracnametext = function() {
	if (this.need_refresh_parameter(8)) {
		this._old_caracname = this._battler._name;
		this.create_Caracnametext();
	};
	if (this.need_refresh_parameter(9)) {
		this._old_carx = $gamePlayer._realX;
		this.create_Caracnametext();
	};
	if (this.need_refresh_parameter(10)) {
		this._old_cary = $gamePlayer._realY;
		this.create_Caracnametext();
	};
};

//==============================
// * Refresh Name
//==============================
Actor_Hud.prototype.refresh_name = function() {
	this._name.bitmap.clear();
	this._name.bitmap.drawText(this._battler._name, 0, 0, this._name.bitmap.width, this._name.bitmap.height,0);	
};
Actor_Hud.prototype.create_hptext = function() {
	this.removeChild(this._hptext);
	if (!this._battler) {return};	
	this._hptext = new Sprite(new Bitmap(300,48));
	this._hptext.x = (Graphics.boxWidth/2) - 220;
	this._hptext.y = Graphics.boxHeight - 75;
	this._hptext.bitmap.fontSize = 22;
	if (String(Moghunter.ahud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._hptext.bitmap.outlineWidth = Number(Moghunter.ahud_name_font_bold_size);
	this.addChild(this._hptext);	
	this.refresh_hptext();
};
Actor_Hud.prototype.refresh_hptext = function() {
	this._hptext.bitmap.clear();
	this._hptext.bitmap.drawText(("HP "+this._battler._hp), 0, 0, this._hptext.bitmap.width, this._hptext.bitmap.height,0);	
};

Actor_Hud.prototype.create_mptext = function() {
	this.removeChild(this._mptext);
	if (!this._battler) {return};	
	this._mptext = new Sprite(new Bitmap(300,48));
	this._mptext.x = (Graphics.boxWidth/2) - 68;
	this._mptext.y = Graphics.boxHeight - 75;
	this._mptext.bitmap.fontSize = 22;
	if (String(Moghunter.ahud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._mptext.bitmap.outlineWidth = Number(Moghunter.ahud_name_font_bold_size);
	this.addChild(this._mptext);	
	this.refresh_mptext();
};
Actor_Hud.prototype.refresh_mptext = function() {
	this._mptext.bitmap.clear();
	this._mptext.bitmap.drawText(("MP "+this._battler._mp), 0, 0, this._mptext.bitmap.width, this._mptext.bitmap.height,0);	
};

Actor_Hud.prototype.create_tptext = function() {
	this.removeChild(this._tptext);
	if (!this._battler) {return};	
	this._tptext = new Sprite(new Bitmap(300,48));
	this._tptext.x = (Graphics.boxWidth/2) + 85;
	this._tptext.y = Graphics.boxHeight - 75;
	this._tptext.bitmap.fontSize = 22;
	if (String(Moghunter.ahud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._tptext.bitmap.outlineWidth = Number(Moghunter.ahud_name_font_bold_size);
	this.addChild(this._tptext);	
	this.refresh_tptext();
};
Actor_Hud.prototype.refresh_tptext = function() {
	this._tptext.bitmap.clear();
	this._tptext.bitmap.drawText(("TP "+this._battler._tp), 0, 0, this._tptext.bitmap.width, this._tptext.bitmap.height,0);	
};

Actor_Hud.prototype.create_goldtext = function() {
	this.removeChild(this._goldtext);
	if (!this._battler) {return};	
	this._goldtext = new Sprite(new Bitmap(300,48));
	this._goldtext.x = (Graphics.boxWidth/2) + 300;
	this._goldtext.y = Graphics.boxHeight - 45;
	this._goldtext.bitmap.fontSize = 16;
	if (String(Moghunter.ahud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._goldtext.bitmap.outlineWidth = Number(Moghunter.ahud_name_font_bold_size);
	this.addChild(this._goldtext);	
	this.refresh_goldtext();
};

Actor_Hud.prototype.refresh_goldtext = function() {
	this._goldtext.bitmap.clear();
	this._goldtext.bitmap.drawText(($gameParty.gold()+" G"), 0, 0, this._goldtext.bitmap.width, this._goldtext.bitmap.height,0);	
};

Actor_Hud.prototype.create_xptext = function() {
	this.removeChild(this._xptext);
	if (!this._battler) {return};	
	this._xptext = new Sprite(new Bitmap(300,48));
	this._xptext.x = (Graphics.boxWidth/2) -200;
	this._xptext.y = Graphics.boxHeight - 30;
	this._xptext.bitmap.fontSize = 14;
	if (String(Moghunter.ahud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._xptext.bitmap.outlineWidth = Number(Moghunter.ahud_name_font_bold_size);
	this.addChild(this._xptext);	
	this.refresh_xptext();
};

Actor_Hud.prototype.refresh_xptext = function() {
	this._xptext.bitmap.clear();
	this._xptext.bitmap.drawText(("Lv."+this._battler._level+" : "+this._battler.current_exp_r()+"/"+this._battler.nextLevelExp_r()), 0, 0, this._xptext.bitmap.width, this._xptext.bitmap.height,0);	
};

Actor_Hud.prototype.create_contour_exp = function() {
	this.removeChild(this._exp_meter_bar);
	this._exp_meter_bar = new Sprite(this._exp_meterbar_img);
	this.addChild(this._exp_meter_bar);
	this._exp_meter_bar.move((Graphics.boxWidth/2) - 201,Graphics.boxHeight - 26);
};

Actor_Hud.prototype.create_contour_hp = function() {
	this.removeChild(this._hp_meter_bar);
	this._hp_meter_bar = new Sprite(ImageManager.loadAHud("contour-gauge"));
	this.addChild(this._hp_meter_bar);
	this._hp_meter_bar.move((Graphics.boxWidth/2) - 220,Graphics.boxHeight - 71);
};

Actor_Hud.prototype.create_contour_mp = function() {
	this.removeChild(this._mp_meter_bar);
	this._mp_meter_bar = new Sprite(ImageManager.loadAHud("contour-gauge"));
	this.addChild(this._mp_meter_bar);
	this._mp_meter_bar.move((Graphics.boxWidth/2) - 69,Graphics.boxHeight - 71);
};

Actor_Hud.prototype.create_contour_tp = function() {
	this.removeChild(this._tp_meter_bar);
	this._tp_meter_bar = new Sprite(ImageManager.loadAHud("contour-gauge"));
	this.addChild(this._tp_meter_bar);
	this._tp_meter_bar.move((Graphics.boxWidth/2) +82,Graphics.boxHeight - 70);
};
//==============================
// * Create HP Meter
//==============================
Actor_Hud.prototype.create_hp_meter = function() {
	this.removeChild(this._hp_meter_blue);
	this.removeChild(this._hp_meter_red);
	if (!this._battler) {return};
	this._hp_meter_red = new Sprite(this._hp_meter_img);
	this._hp_meter_red.x = (Graphics.boxWidth/2) - 217;
	this._hp_meter_red.y = Graphics.boxHeight - 69;
	this._hp_meter_red.rotation = Moghunter.ahud_hp_meter_rotation * Math.PI / 180;
	this._hp_meter_red.setFrame(0,0,0,0);
	this.addChild(this._hp_meter_red);		
	this._hp_meter_blue = new Sprite(this._hp_meter_img);
	this._hp_meter_blue.x = this._hp_meter_red.x;
	this._hp_meter_blue.y = this._hp_meter_red.y;
	this._hp_meter_blue.rotation = this._hp_meter_red.rotation * Math.PI / 180;
	this._hp_meter_blue.setFrame(0,0,0,0);
	this.addChild(this._hp_meter_blue);
	this._hp_old_ani[0] = this._battler.hp - 1;
	if (String(Moghunter.ahud_hp_meter_flow) === "true") {this._hp_flow[0] = true;
	    this._hp_flow[2] = this._hp_meter_img.width / 3;
		this._hp_flow[3] = this._hp_flow[2] * 2;
		this._hp_flow[1] = Math.floor(Math.random() * this._hp_flow[2]);
	};
};

//==============================
// * Update HP
//==============================
Actor_Hud.prototype.update_hp = function() {
	if (this._hp_meter_blue) {
		this._hp_meter_blue.opacity += 15;
		this._hp_meter_red.opacity += 15;
		if(this._hp_flow[0]) {
		   if (this._hp_old[1] != this._battler.mhp) {
		       this._hp_old = [this._battler.hp,this._battler.mhp];
			   this.refresh_meter_flow(this._hp_meter_red,this._battler.hp,this._battler.mhp,1,this._hp_flow[1]);
		   };					
		   this.refresh_meter_flow(this._hp_meter_blue,this._battler.hp,this._battler.mhp,0,this._hp_flow[1]);
	   	   var dif_meter = this.update_dif(this._hp_old_ani[0],this._battler.hp,160)
		   if (this._hp_old_ani[0] != dif_meter) {this._hp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._hp_meter_red,this._hp_old_ani[0],this._battler.mhp,1,this._hp_flow[1]);
		   };
		   this._hp_flow[1] += 2;
		   if (this._hp_flow[1] > this._hp_flow[3]) {this._hp_flow[1] = 0};		   
   	    }
		else {
		   if (this.need_refresh_parameter(0)) {
				this.refresh_meter(this._hp_meter_blue,this._battler.hp,this._battler.mhp,0,2,0);
				this._hp_old = [this._battler.hp,this._battler.mhp];
			};
			var dif_meter = this.update_dif(this._hp_old_ani[0],this._battler.hp,160)
			if (this._hp_old_ani[0] != dif_meter) {this._hp_old_ani[0] = dif_meter;
			this.refresh_meter(this._hp_meter_red,this._hp_old_ani[0],this._battler.mhp,1,2,0);};		
	    };
    };
	this.refresh_hptext();
};

Actor_Hud.prototype.update_gold = function () {
	if (this.need_refresh_parameter(4)) {
		this._gold_old = $gameParty.gold();
		this.refresh_goldtext();
	};
}

//==============================
// * Create MP Meter
//==============================
Actor_Hud.prototype.create_mp_meter = function() {
	if (String(Moghunter.ahud_mp_meter_visible) != "true") {return};
	this.removeChild(this._mp_meter_blue);
	this.removeChild(this._mp_meter_red);
	if (!this._battler) {return};
	this._mp_meter_red = new Sprite(this._mp_meter_img);
	this._mp_meter_red.x = (Graphics.boxWidth/2) - 66 ;
	this._mp_meter_red.y = Graphics.boxHeight - 69;
	this._mp_meter_red.rotation = Moghunter.ahud_mp_meter_rotation * Math.PI / 180;
	this._mp_meter_red.setFrame(0,0,0,0);
	this.addChild(this._mp_meter_red);		
	this._mp_meter_blue = new Sprite(this._mp_meter_img);
	this._mp_meter_blue.x = this._mp_meter_red.x;
	this._mp_meter_blue.y = this._mp_meter_red.y;
	this._mp_meter_blue.rotation = this._mp_meter_red.rotation * Math.PI / 180;
	this._mp_meter_blue.setFrame(0,0,0,0);
	this.addChild(this._mp_meter_blue);
	this._mp_old_ani[0] = this._battler.mp - 1;
	if (String(Moghunter.ahud_mp_meter_flow) === "true") {this._mp_flow[0] = true;
	    this._mp_flow[2] = this._mp_meter_img.width / 3;
		this._mp_flow[3] = this._mp_flow[2] * 2;
		this._mp_flow[1] = Math.floor(Math.random() * this._mp_flow[2]);
	};
};

//==============================
// * Update MP
//==============================
Actor_Hud.prototype.update_mp = function() {
	if (this._mp_meter_blue) {
     	this._mp_meter_blue.opacity += 15;
	    this._mp_meter_red.opacity += 15;			
		if(this._mp_flow[0]) {
		   if (this._mp_old[1] != this._battler.mmp) {
		       this._mp_old = [this._battler.mp,this._battler.mmp];
			   this.refresh_meter_flow(this._mp_meter_red,this._battler.mp,this._battler.mmp,1,this._mp_flow[1]);
		   };			
		   this.refresh_meter_flow(this._mp_meter_blue,this._battler.mp,this._battler.mmp,0,this._mp_flow[1]);
	   	   var dif_meter = this.update_dif(this._mp_old_ani[0],this._battler.mp,160);
		   if (this._mp_old_ani[0] != dif_meter) {this._mp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._mp_meter_red,this._mp_old_ani[0],this._battler.mmp,1,this._mp_flow[1]);
		   };
		   this._mp_flow[1] += 2;
		   if (this._mp_flow[1] > this._mp_flow[3]) {this._mp_flow[1] = 0};		   
   	    }
		else {		
			if (this.need_refresh_parameter(1)) {
				this.refresh_meter(this._mp_meter_blue,this._battler.mp,this._battler.mmp,0,2,0);
				this._mp_old = [this._battler.mp,this._battler.mmp];
			};
			var dif_meter = this.update_dif(this._mp_old_ani[0],this._battler.mp,160)
			if (this._mp_old_ani[0] != dif_meter) {this._mp_old_ani[0] = dif_meter;
			this.refresh_meter(this._mp_meter_red,this._mp_old_ani[0],this._battler.mmp,1,2,0);};
		};
    };
	this.refresh_mptext();
};

//==============================
// * Create TP Meter
//==============================
Actor_Hud.prototype.create_tp_meter = function() {
	if (String(Moghunter.ahud_tp_meter_visible) != "true") {return};
	this.removeChild(this._tp_meter_blue);
	this.removeChild(this._tp_meter_red);
	if (!this._battler) {return};
	this._tp_meter_red = new Sprite(this._tp_meter_img);
	this._tp_meter_red.x = (Graphics.boxWidth/2) + 85;
	this._tp_meter_red.y = Graphics.boxHeight - 68;
	this._tp_meter_red.rotation = Moghunter.ahud_tp_meter_rotation * Math.PI / 180;
	this._tp_meter_red.setFrame(0,0,0,0);
	this.addChild(this._tp_meter_red);		
	this._tp_meter_blue = new Sprite(this._tp_meter_img);
	this._tp_meter_blue.x = this._tp_meter_red.x;
	this._tp_meter_blue.y = this._tp_meter_red.y;
	this._tp_meter_blue.rotation = this._tp_meter_red.rotation * Math.PI / 180;
	this._tp_meter_blue.setFrame(0,0,0,0);
	this.addChild(this._tp_meter_blue);
	this._tp_old_ani[0] = this._battler.tp - 1;
	if (String(Moghunter.ahud_tp_meter_flow) === "true") {this._tp_flow[0] = true;
	    this._tp_flow[2] = this._tp_meter_img.width / 3;
		this._tp_flow[3] = this._tp_flow[2] * 2;
		this._tp_flow[1] = Math.floor(Math.random() * this._tp_flow[2]);
	};
};

//==============================
// * Update TP
//==============================
Actor_Hud.prototype.update_tp = function() {
	if (this._tp_meter_blue) {
		this._tp_meter_blue.opacity += 15;
		this._tp_meter_red.opacity += 15;
		if(this._tp_flow[0]) {
		   if (this._tp_old[1] != this._battler.maxTp()) {
		       this._tp_old = [this._battler.tp,this._battler.maxTp()];
			   this.refresh_meter_flow(this._tp_meter_red,this._battler.tp,this._battler.maxTp(),1,this._tp_flow[1]);
		   };				
		   this.refresh_meter_flow(this._tp_meter_blue,this._battler.tp,this._battler.maxTp(),0,this._tp_flow[1]);
	   	   var dif_meter = this.update_dif(this._tp_old_ani[0],this._battler.tp,160)
		   if (this._tp_old_ani[0] != dif_meter) {this._tp_old_ani[0] = dif_meter;
	       this.refresh_meter_flow(this._tp_meter_red,this._tp_old_ani[0],this._battler.maxTp(),1,this._tp_flow[1]);
		   };
		   this._tp_flow[1] += 2;
		   if (this._tp_flow[1] > this._tp_flow[3]) {this._tp_flow[1] = 0};		   
   	    }
		else {	
			if (this.need_refresh_parameter(2)) {
				this.refresh_meter(this._tp_meter_blue,this._battler.tp,this._battler.maxTp(),0,2,0);
				this._tp_old = [this._battler.tp,this._battler.maxTp()];
			};
			var dif_meter = this.update_dif(this._tp_old_ani[0],this._battler.tp,160)
			if (this._tp_old_ani[0] != dif_meter) {this._tp_old_ani[0] = dif_meter;
			this.refresh_meter(this._tp_meter_red,this._tp_old_ani[0],this._battler.maxTp(),1,2,0);};
	};
    };
	this.refresh_tptext();
};


//==============================
// * Create Exp Meter
//==============================
Actor_Hud.prototype.create_exp_meter = function() {	
if (String(Moghunter.ahud_exp_meter_visible) != "true") {return};
	this.removeChild(this._exp_meter);
	if (!this._battler) {return};
	this._exp_meter = new Sprite(this._exp_meter_img);
	this._exp_meter.x = (Graphics.boxWidth/2) - 198;
	this._exp_meter.y = Graphics.boxHeight - 24 ;
	this._exp_meter.rotation = this._exp_meter.rotation * Math.PI / 180;
	this.addChild(this._exp_meter);
	if (String(Moghunter.ahud_exp_meter_flow) === "true") {this._exp_flow[0] = true;
	    this._exp_flow[2] = this._exp_meter_img.width;
		this._exp_flow[3] = this._exp_flow[2] * 2;
		this._exp_flow[1] = Math.floor(Math.random() * this._exp_flow[2]);
	};
	this._exp_meter.setFrame(0,0,0,0);
};

//==============================
// * Create Level Number
//==============================


//==============================
// * Update Exp
//==============================
Actor_Hud.prototype.update_exp = function() {
	if (this._exp_meter) {
		this._exp_meter.opacity += 15; 
		if (this.need_refresh_parameter(3)) {
			if (this._battler.isMaxLevel()) {
			    this.refresh_meter(this._exp_meter,1,1,0,1,1);
		    } else {
     			this.refresh_meter(this._exp_meter,this._battler.current_exp_r(),this._battler.nextLevelExp_r(),0,1,1);
			};
			this._exp_old = this._battler.currentExp();
		};
    };
	this.refresh_xptext();
};

//==============================
// * Create States
//==============================
Actor_Hud.prototype.create_states = function() {
	if (String(Moghunter.ahud_states_visible) != "true") {return};
	this.removeChild(this._state_icon);
	if (!this._battler) {return};
	this._states_data = [0,0,0];
	this._state_icon = new Sprite(this._state_img);
	this._state_icon.x = Graphics.boxWidth/2
	this._state_icon.y = 20;
	this._state_icon.visible = false;
	this.addChild(this._state_icon);
	this.refresh_states();	
};

//==============================
// * Refresh States
//==============================
Actor_Hud.prototype.refresh_states = function() {
	this._states_data[0] = 0;
	this._states_data[2] = 0;
	this._state_icon.visible = false;
	if (this._battler.allIcons().length == 0) {this._states_data[1] = 0;return};
       if (this._battler.allIcons()[this._states_data[1]]) {	
		this._states_data[0] = this._battler.allIcons()[this._states_data[1]];
		this._state_icon.visible = true;
		var sx = this._states_data[0] % 16 * 32;
		var sy = Math.floor(this._states_data[0] / 16) * 32;
		this._state_icon.setFrame(sx, sy, 32, 32);
		this._battler.need_refresh_bhud_states = false;	
	
	   };
	this._states_data[1] += 1;
	if (this._states_data[1] >= this._battler.allIcons().length) {
		this._states_data[1] = 0
	};
};

//==============================
// * Update States
//==============================
Actor_Hud.prototype.update_states = function() {
	if (!this._state_icon) {return};
	this._states_data[2] += 1;
	if (this.need_refresh_states()) {this.refresh_states();};
};

//==============================
// * Need Refresh States
//==============================
Actor_Hud.prototype.need_refresh_states = function() {
	if (this._battler.need_refresh_bhud_states) {return true};
	if (this._states_data[2] > 60) {return true};
	return false;
};

//==============================
//* Create Date Time and Meteo informations
//==============================
ImageManager.loadIconMeteo = function(filename) {
    return this.loadBitmap('icon/', filename, 0, true);
};



//==============================
// * Create Icon Meteo
//==============================
Actor_Hud.prototype.create_iconMeteo = function() {
	this.removeChild(this._iconMeteo);
	iconWeatherToShow = $gameVariables.value(25);
	this._iconMeteo = [0,0,0];
	this._iconMeteo = new Sprite(ImageManager.loadIconMeteo(iconWeatherToShow));
	this._iconMeteo.x = Graphics.boxWidth - 50
	this._iconMeteo.y = 17;
	this._iconMeteo.visible = true;
	this.addChild(this._iconMeteo);
    this.update_iconMeteo();};

//==============================
// * Update Icon Meteo
//==============================
Actor_Hud.prototype.update_iconMeteo = function() {
	if (!this._iconMeteo) {return};
	if (!this._iconMeteo.bitmap.isReady()) {return};
	if (this.need_refresh_parameter(11)) {
		this._old_weather = $gameVariables.value(25)
		this.refresh_iconMeteo();
	};

};

//==============================
// * Refresh Icon Meteo
//==============================
Actor_Hud.prototype.refresh_iconMeteo = function() {
	this.create_iconMeteo()
};

//==============================
// * Creat Time Text
//==============================

Actor_Hud.prototype.create_Timetext = function() {
	this.removeChild(this._timetext);
	if (!this._battler) {return};	
	this._timetext = new Sprite(new Bitmap(300,48));
	this._timetext.x = Graphics.boxWidth - 320;
	this._timetext.y = 118;
	this._timetext.bitmap.fontSize = 16;
	if (String(Moghunter.ahud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._timetext.bitmap.outlineWidth = Number(Moghunter.ahud_name_font_bold_size);
	this.addChild(this._timetext);	
	this.refresh_Timetext();
};

Actor_Hud.prototype.refresh_Timetext = function() {
	this._timetext.bitmap.clear();
	this._timetext.bitmap.drawText((($gameVariables.value(4)+1)+"/"+($gameVariables.value(5)+1)+"/"+$gameVariables.value(6)+" "+$gameVariables.value(2)+":"+$gameVariables.value(1)), 0, 0, this._timetext.bitmap.width, this._timetext.bitmap.height,"right");	
};

Actor_Hud.prototype.update_Timetext = function () {
	if (this.need_refresh_parameter(6)) {
		this._old_time = ($gameVariables.value(4)+1)+"/"+($gameVariables.value(5)+1)+"/"+$gameVariables.value(6)+" "+$gameVariables.value(2)+":"+$gameVariables.value(1);
		this.refresh_Timetext();
	};
}


//================================================================
//AFFICHAGE PSEUDO DU JOUEUR
//================================================================
Actor_Hud.prototype.create_Jobtext = function() {
	this.removeChild(this._jobtext);
	if (!this._battler) {return};	
	this._jobtext = new Sprite(new Bitmap(300,48));
	this._jobtext.x = 85;
	this._jobtext.y = 30;
	this._jobtext.bitmap.fontSize = 18;
	if (String(Moghunter.ahud_name_font_italic) === "true") {this._name.bitmap.fontItalic = true};
    this._jobtext.bitmap.outlineWidth = Number(Moghunter.ahud_name_font_bold_size);
	this.addChild(this._jobtext);	
	this.refresh_Jobtext();
};

Actor_Hud.prototype.refresh_Jobtext = function() {
	this._jobtext.bitmap.clear();
	this._jobtext.bitmap.drawText($dataClasses[this._battler._classId].name, 0, 0, this._jobtext.bitmap.width, this._jobtext.bitmap.height,0);	
};

Actor_Hud.prototype.update_Jobtext = function () {
	if (this.need_refresh_parameter(7)) {
		this._old_job = $dataClasses[this._battler._classId].name
		this.refresh_Jobtext();
	};
}

//************************************************************************/
// APPEARANCE OF MAPDISPLAY 
//************************************************************************** */
function Window_MapName() {
    this.initialize(...arguments);
}

Window_MapName.prototype = Object.create(Window_Base.prototype);
Window_MapName.prototype.constructor = Window_MapName;

Window_MapName.prototype.initialize = function(rect) {
    Window_Base.prototype.initialize.call(this, rect);
    this.width=300;
    this.x = (Graphics.boxWidth/2)-150;
    this.y = (Graphics.boxHeight/2)-150;
    this.opacity = 0;
    this.contentsOpacity = 0;
    this._showCount = 0;
    this.refresh();
};

Window_MapName.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    if (this._showCount > 0 && $gameMap.isNameDisplayEnabled()) {
        this.updateFadeIn();
        this._showCount--;
    } else {
        this.updateFadeOut();
    }
};

Window_MapName.prototype.updateFadeIn = function() {
    this.contentsOpacity += 16;
};

Window_MapName.prototype.updateFadeOut = function() {
    this.contentsOpacity -= 16;
};

Window_MapName.prototype.open = function() {
    this.refresh();
    this._showCount = 150;
};

Window_MapName.prototype.close = function() {
    this._showCount = 0;
};

Window_MapName.prototype.refresh = function() {
    this.contents.clear();
    if ($gameMap.displayName()) {
        const width = this.innerWidth;
        this.drawBackground(0, 0, width, this.lineHeight());
        this.drawText($gameMap.displayName(), 0, 0, width, "center");
    }
};

Window_MapName.prototype.drawBackground = function(x, y, width, height) {
    const color1 = ColorManager.dimColor1();
    const color2 = ColorManager.dimColor2();
    const half = width / 2;
    this.contents.gradientFillRect(x, y, half, height, color2, color1);
    this.contents.gradientFillRect(x + half, y, half, height, color1, color2);
};

//================================================================
// MINI-MAP Show
//================================================================
