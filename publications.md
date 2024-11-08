---
layout: page
title: Publications
---
All my publications can also be viewed on my [Google Scholar profile](https://scholar.google.com/citations?user=4987Pm4AAAAJ).


<!-- DAFx23 -->
<div id="phd_SU2024" class="paper">
    <!--
    <div class="paper-thumbnails">
        <img src="/assets/img/perf_render.png">
    </div> -->
    <div class="paper-info">
        <span class="paper-status-chip">Sorbonne Université</span>
        <p class="paper-title">Neural Audio Synthesis of Realistic Piano Performances</p>
        <p class="paper-authors">Lenny Renault</p>
        <!-- <p class="paper-status">International Conference on Computer Vision (ICCV 2023)</p> -->
        <div class="paper-data">
            <!-- <a class="paper-data-item" onclick='know_more(this)'>&#128064; What ?</a> -->
            <a class="paper-data-item" href="https://theses.hal.science/tel-04732963/" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i> PhD Manuscript</a>
            <a class="paper-data-item" href="https://renault.gitlab-pages.ircam.fr/thesis-support" target="_blank" rel="noopener noreferrer">&#127760; Webpage</a>
            <!--<a class="paper-data-item" href="https://europe.naverlabs.com/wp-content/uploads/2023/09/ICCV23_poster_10123_compressed.pdf" target="_blank" rel="noopener noreferrer"><i class="fas fa-panorama"></i> Poster</a>-->
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; BibTex</a>
        </div>
        <p id="phd_SU2024_descr" class="paper-small-descr">...</p>
        <div id="phd_SU2024_bibtex" style="display: none;">
            @phdthesis{renault:tel-04732963,
                title = {{Neural audio synthesis of realistic piano performances}},
                author = {Renault, Lenny},
                url = {https://theses.hal.science/tel-04732963},
              number = {2024SORUS196},
              school = {{Sorbonne Universit{\'e}}},
              year = {2024},
              month = {July},
              TYPE = {Theses},
              PDF = {https://theses.hal.science/tel-04732963v1/file/139429_RENAULT_2024_archivage.pdf},
              HAL_ID = {tel-04732963},
              HAL_VERSION = {v1},
            }
        </div>
    </div>
</div>



<!-- DAFx23 -->
<div id="unpair-perf-render_dafx23" class="paper">
    <!--
    <div class="paper-thumbnails">
        <img src="/assets/img/perf_render.png">
    </div> -->
    <div class="paper-info">
        <span class="paper-status-chip">DAFx23</span>
        <p class="paper-title">Expressive Piano Performance Rendering from Unpaired Data</p>
        <p class="paper-authors">Lenny Renault, Rémi Mignot, Axel Roebel</p>
        <!-- <p class="paper-status">International Conference on Computer Vision (ICCV 2023)</p> -->
        <div class="paper-data">
            <!-- <a class="paper-data-item" onclick='know_more(this)'>&#128064; What ?</a> -->
            <a class="paper-data-item" href="https://www.dafx.de/paper-archive/2023/DAFx23_paper_75.pdf" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i> Paper</a>
            <a class="paper-data-item" href="http://renault.gitlab-pages.ircam.fr/dafx23/performance/rendering/2023/05/10/sup_mat" target="_blank" rel="noopener noreferrer">&#127760; Webpage</a>
            <!--<a class="paper-data-item" href="https://europe.naverlabs.com/wp-content/uploads/2023/09/ICCV23_poster_10123_compressed.pdf" target="_blank" rel="noopener noreferrer"><i class="fas fa-panorama"></i> Poster</a>-->
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; BibTex</a>
        </div>
        <p id="unpair-perf-render_dafx23_descr" class="paper-small-descr">Recent advances in data-driven expressive performance rendering have enabled automatic models to reproduce the characteristics and the variability of human performances of musical compositions. However, these models need to be trained with aligned pairs of scores and performances and they rely notably on score-specific markings, which limits their scope of application. This work tackles the piano performance rendering task in a low-informed setting by only considering the score note information and without aligned data. The proposed model relies on an adversarial training where the basic score notes properties are modified in order to reproduce the expressive qualities contained in a dataset of real performances. First results for unaligned score-to-performance rendering are presented through a conducted listening test. While the interpretation quality is not on par with highly-supervised methods and human renditions, our method shows promising results for transferring realistic expressivity into scores.</p>
        <div id="unpair-perf-render_dafx23_bibtex" style="display: none;">
            @inproceedings{renault2023unpaired_perf_render,
                title={Expressive Piano Performance Rendering from Unpaired Data},
                author={Renault, Lenny and Mignot, Rémi and Roebel, Axel},
                booktitle={Proc. of the 26th International Conference on Digital Audio Effects (DAFx23)},
                year={2023},
                month={September}
            }
        </div>
    </div>
</div>


<!-- JAES23 -->
<div id="ddsppiano_jaes" class="paper">
    <!--
    <div class="paper-thumbnails">
        <img src="/assets/img/ddsp_piano_v1.png">
    </div>-->
    <div class="paper-info">
        <span class="paper-status-chip">JAES</span>
        <p class="paper-title">DDSP-Piano: a Neural Sound Synthesizer informed by Instrument Knowledge</p>
        <p class="paper-authors">Lenny Renault, Rémi Mignot, Axel Roebel</p>
        <!-- <p class="paper-status">International Conference on Computer Vision (ICCV 2023)</p> -->
        <div class="paper-data">
            <!-- <a class="paper-data-item" onclick='know_more(this)'>&#128064; What ?</a> -->
            <a class="paper-data-item" href="https://aes2.org/publications/elibrary-page/?id=22231" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i>Paper</a>
            <a class="paper-data-item" href="http://renault.gitlab-pages.ircam.fr/dafx22-audio/jekyll/update/2022/04/25/supplementary-materials" target="_blank" rel="noopener noreferrer">&#127760; Webpage</a>
            <a class="paper-data-item" href="https://github.com/lrenault/ddsp-piano" target="_blank" rel="noopener noreferrer"><i class="fa fa-code"></i> Code</a>
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; BibTex</a>
        </div>
        <p id="ddsppiano_jaes_descr" class="paper-small-descr">Instrument sound synthesis using deep neural networks has received numerous improvements over the last couple of years. Among them, the Differentiable Digital Signal Processing (DDSP) framework has modernized the spectral modeling paradigm by including signal-based synthesizers and effects into fully differentiable architectures. The present work extends the applications of DDSP to the task of polyphonic sound synthesis, with the proposal of a differentiable piano synthesizer conditioned on MIDI inputs. The model architecture is motivated by high-level acoustic modeling knowledge of the instrument, which, along with the sound structure priors inherent to the DDSP components, makes for a lightweight, interpretable, and realistic-sounding piano model. A subjective listening test has revealed that the proposed approach achieves better sound quality than a state-of-the-art neural-based piano synthesizer, but physical-modeling-based models still hold the best quality. Leveraging its interpretability and modularity, a qualitative analysis of the model behavior was also conducted: it highlights where additional modeling knowledge and optimization procedures could be inserted in order to improve the synthesis quality and the manipulation of sound properties. Eventually, the proposed differentiable synthesizer can be further used with other deep learning models for alternative musical tasks handling polyphonic audio and symbolic data.</p>
        <div id="ddsppiano_jaes_bibtex" style="display: none;">
            @article{renault2023ddsp-piano:, 
                author={renault  lenny and mignot  rémi and roebel  axel}, 
                journal={Journal of the Audio Engineering Society}, 
                title={{DDSP-Piano: a Neural Sound Synthesizer informed by Instrument Knowledge}}, 
                year={2023}, 
                volume={71}, 
                issue={9}, 
                pages={552-565}, 
                month={September}
            }
        </div>
    </div>
</div>



<!-- DAFx22 -->
<div id="diffpiano_dafx22" class="paper">
    <!--
    <div class="paper-thumbnails">
        <img src="/assets/img/ddsp_piano_v1.png">
    </div>-->
    <div class="paper-info">
        <span class="paper-status-chip">DAFx20in22</span>
        <p class="paper-title">Differentiable Piano Model for MIDI-to-Audio Performance Synthesis</p>
        <p class="paper-authors">Lenny Renault, Rémi Mignot, Axel Roebel</p>
        <!-- <p class="paper-status">International Conference on Computer Vision (ICCV 2023)</p> -->
        <div class="paper-data">
            <!-- <a class="paper-data-item" onclick='know_more(this)'>&#128064; What ?</a> -->
            <a class="paper-data-item" href="https://www.dafx.de/paper-archive/2022/papers/DAFx20in22_paper_48.pdf" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i> Paper</a>
            <a class="paper-data-item" href="http://renault.gitlab-pages.ircam.fr/dafx22-audio/jekyll/update/2022/04/25/supplementary-materials" target="_blank" rel="noopener noreferrer">&#127760; Webpage</a>
            <a class="paper-data-item" href="https://github.com/lrenault/ddsp-piano" target="_blank" rel="noopener noreferrer"><i class="fa fa-code"></i> Code</a>
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; BibTex</a>
        </div>
        <p id="diffpiano_dafx22_descr" class="paper-small-descr">Recent neural-based synthesis models have achieved impressive results for musical instrument sound generation. In particular, the Differentiable Digital Signal Processing (DDSP) framework enables the usage of spectral modeling analysis and synthesis techniques in fully differentiable architectures. Yet currently, it has only been used for modeling monophonic instruments. Leveraging the interpretability and modularity of this framework, the present work introduces a polyphonic differentiable model for piano sound synthesis, conditioned on Musical Instrument Digital Interface (MIDI) inputs. The model architecture is motivated by high-level acoustic modeling knowledge of the instrument which, in tandem with the sound structure priors inherent to the DDSP components, makes for a lightweight, interpretable and realistic sounding piano model. The proposed model has been evaluated in a listening test, demonstrating improved sound quality compared to a benchmark neural-based piano model, with significantly less parameters and even with reduced training data. The same listening test indicates that physical-modeling-based models still achieve better quality, but the differentiability of our lightened approach encourages its usage in other musical tasks dealing with polyphonic audio and symbolic data.</p>
        <div id="diffpiano_dafx22_bibtex" style="display: none;">
            @inproceedings{renault2022differentiable_piano,
                title={Differentiable Piano Model for MIDI-to-Audio Perormance Synthesis},
                author={Renault, Lenny and Mignot, Rémi and Roebel, Axel},
                booktitle={Proc. of the 25th International Conference on Digital Audio Effects (DAFx20in22)},
                year={2022},
                month={September}
            }
        </div>
    </div>
</div>


<!-- ICASSP 2021 -->
<div id="deep-phonotactic_icassp21" class="paper">
    <!--
    <div class="paper-thumbnails">
        <img src="/assets/img/ddsp_piano_v1.png">
    </div>-->
    <div class="paper-info">
        <span class="paper-status-chip">ICASSP 2021</span>
        <p class="paper-title">Singing Language Identification using a Deep Phonotactic Approach</p>
        <p class="paper-authors">Lenny Renault, Andrea Vaglio, Romain Hennequin</p>
        <!-- <p class="paper-status">International Conference on Computer Vision (ICCV 2023)</p> -->
        <div class="paper-data">
            <!-- <a class="paper-data-item" onclick='know_more(this)'>&#128064; What ?</a> -->
            <a class="paper-data-item" href="https://arxiv.org/pdf/2105.15014" target="_blank" rel="noopener noreferrer"><i class="far fa-file-pdf"></i> Paper</a>
            <!-- <a class="paper-data-item" href="http://renault.gitlab-pages.ircam.fr/dafx22-audio/jekyll/update/2022/04/25/supplementary-materials" target="_blank" rel="noopener noreferrer">&#127760; Webpage</a> -->
            <a class="paper-data-item" href="https://github.com/deezer/SingingLanguageIdentification" target="_blank" rel="noopener noreferrer"><i class="fa fa-code"></i> Dataset split</a>
            <a class="paper-data-item" onclick='copy_bibtext(this)'>&#128278; BibTex</a>
        </div>
        <p id="deep-phonotactic_icassp21_descr" class="paper-small-descr">Extensive works have tackled Language Identification (LID) in the speech domain, however their application to the singing voice trails and performances on Singing Language Identification (SLID) can be improved leveraging recent progresses made in other singing related tasks. This work presents a modernized phonotactic system for SLID on polyphonic music: phoneme recognition is performed with a Connectionist Temporal Classification (CTC)-based acoustic model trained with multilingual data, before language classification with a recurrent model based on the phonemes estimation. The full pipeline is trained and evaluated with a large and publicly available dataset, with unprecedented performances. First results of SLID with out-of-set languages are also presented.</p>
        <div id="deep-phonotactic_icassp21_bibtex" style="display: none;">
            @inproceedings{renault2021deep_phonotactic,
                author={Renault, Lenny and Vaglio, Andrea and Hennequin, Romain},
                booktitle={ICASSP 2021 - 2021 IEEE International Conference on Acoustics, Speech and Signal Processing (ICASSP)}, 
                title={Singing Language Identification Using a Deep Phonotactic Approach}, 
                year={2021},
                month={June},
                volume={},
                number={},
                pages={271-275},
                doi={10.1109/ICASSP39728.2021.9414203}
            }
        </div>
    </div>
</div>